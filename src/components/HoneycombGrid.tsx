import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import HexagonCard from './HexagonCard';
import { teamMembers, TeamMember } from '@/data/team';
import { cn } from '@/lib/utils'; // Assuming this utility exists for class merging

interface HoneycombGridProps {
  members: TeamMember[];
  hexRadius?: number; // Distance from center to vertex, defines the size
  gap?: number; // Gap between hexagons
}

const HoneycombGrid: React.FC<HoneycombGridProps> = ({ members, hexRadius = 202, gap = 25 }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Calculate hexagon dimensions
  const HEX_SIDE_LENGTH = hexRadius;
  const HEX_WIDTH = HEX_SIDE_LENGTH * Math.sqrt(3); // flat-top hexagon width (point-to-point horizontal)
  const HEX_HEIGHT = HEX_SIDE_LENGTH * 2;          // flat-top hexagon height (flat-to-flat vertical)

  // Pre-calculate positions for a perfect honeycomb grid
  const initialPositions = useMemo(() => {
    const positions: { member: TeamMember; x: number; y: number; index: number }[] = [];
    const numMembers = members.length;
    const currentMemberIndex = 0;

    // Dimensions for layout
    const verticalSpacing = HEX_HEIGHT * 0.75 + gap; // Distance from center of one hex to center of hex two rows down
    const horizontalSpacing = HEX_WIDTH + gap; // Distance from center of one hex to center of adjacent hex

    // For simplicity and aesthetic, let's arrange them in a diamond-like shape or a filled rectangle
    // We'll calculate maxCols and maxRows dynamically to keep the grid somewhat compact
    const maxMembersPerRow = Math.ceil(Math.sqrt(numMembers * 0.75)); // heuristic
    const maxRows = Math.ceil(numMembers / maxMembersPerRow) + 1; // Add one for good measure

    const currentRow = 0;
    const xOffset = 0;
    const yOffset = 0;

    // Calculate initial positions
    for (let i = 0; i < numMembers; i++) {
      const row = Math.floor(i / maxMembersPerRow);
      const col = i % maxMembersPerRow;

      // Stagger odd rows
      const staggerOffset = (row % 2 === 1) ? HEX_WIDTH / 2 : 0;

      const x = col * horizontalSpacing + staggerOffset;
      const y = row * verticalSpacing;

      positions.push({
        member: members[i],
        x,
        y,
        index: i,
      });
    }

    // Adjust all positions to start from (0,0) and then center the entire grid later
    const minX = Math.min(...positions.map(p => p.x));
    const minY = Math.min(...positions.map(p => p.y));

    return positions.map(p => ({
      ...p,
      x: p.x - minX,
      y: p.y - minY,
    }));

  }, [members, HEX_WIDTH, HEX_HEIGHT, gap]);

  const hexGridWithPush = useMemo(() => {
    const hoveredHex = hoveredId ? initialPositions.find(p => p.member.id === hoveredId) : null;

    return initialPositions.map(hex => {
      let pushX = 0;
      let pushY = 0;
      let opacity = 1;
      let scale = 1;
      let zIndex = 1; // Default z-index

      const isCurrentlyHovered = hex.member.id === hoveredId;

      if (hoveredHex && !isCurrentlyHovered) {
        const dx = hex.x - hoveredHex.x;
        const dy = hex.y - hoveredHex.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const maxPushDistance = HEX_WIDTH * 2; // Radius within which hexagons are affected (e.g., 2 hex widths)
        const minPush = HEX_SIDE_LENGTH * 0.1; // Minimum push (e.g., 10% of side length)
        const maxPush = HEX_SIDE_LENGTH * 0.4; // Maximum push (e.g., 40% of side length)


        if (distance < maxPushDistance && distance > 0) {
          // A more complex falloff: linear within a range, then parabolic or exponential
          const normalizedDistance = Math.min(distance / maxPushDistance, 1);
          let pushFactor;

          if (normalizedDistance < 0.5) { // Stronger push for closer hexagons
            pushFactor = 1 - (normalizedDistance * 1.5); // Linear falloff, then faster
          } else {
            pushFactor = (1 - normalizedDistance) ** 2; // Parabolic falloff for farther ones
          }
          pushFactor = Math.max(0, pushFactor); // Ensure it doesn't go below zero

          let currentPushAmount = minPush + (maxPush - minPush) * pushFactor;

          // Ensure pushAmount is not tiny for very close ones
          if (distance < HEX_WIDTH * 0.5) { // If very close, ensure a significant push
            currentPushAmount = Math.max(currentPushAmount, maxPush * 0.7);
          }


          if (distance > 0) {
            pushX = (dx / distance) * currentPushAmount;
            pushY = (dy / distance) * currentPushAmount;
          }

          // Scale down and dim neighbors
          scale = 1 - (0.08 * pushFactor); // Max 8% scale down
          opacity = 1 - (0.3 * pushFactor); // Max 30% dim
          opacity = Math.max(0.6, opacity); // Don't let it go too dim
        }
      }

      // If the current hex is the hovered one, ensure it's on top
      if (isCurrentlyHovered) {
        zIndex = 10;
        opacity = 1; // Ensure hovered item is always fully opaque
        scale = 1; // Ensure hovered item doesn't get scaled down by push logic
      }

      return {
        ...hex,
        isHovered: isCurrentlyHovered,
        pushX,
        pushY,
        opacity,
        scale,
        zIndex,
      };
    });
  }, [initialPositions, hoveredId, HEX_WIDTH, HEX_SIDE_LENGTH]);


  const handleHoverStart = useCallback((id: string) => {
    setHoveredId(id);
  }, []);

  const handleHoverEnd = useCallback(() => {
    setHoveredId(null);
  }, []);

  // Calculate the total grid dimensions for centering
  const gridDimensions = useMemo(() => {
    if (initialPositions.length === 0) return { width: 0, height: 0 };
    const maxX = Math.max(...initialPositions.map(p => p.x));
    const maxY = Math.max(...initialPositions.map(p => p.y));

    // Add full hex width/height to get total dimensions
    return {
      width: maxX + HEX_WIDTH,
      height: maxY + HEX_HEIGHT,
    };
  }, [initialPositions, HEX_WIDTH, HEX_HEIGHT]);

  return (
    <div
      className={cn(
        "relative flex items-center justify-center min-h-screen py-10 px-4 transition-colors duration-300",
      )}
      style={{
        backgroundColor: hoveredId ? 'hsl(var(--background) / 0.9)' : 'hsl(var(--background))',
        transition: 'background-color 0.3s ease-in-out',
      }}
    >
      <motion.div
        className="relative"
        style={{ width: gridDimensions.width, height: gridDimensions.height }}
        // Use transform: translate(-50%, -50%) relative to its parent for centering
        // Or let the flexbox parent handle it, which is the current setup
      >
        {hexGridWithPush.map((hex) => (
          <motion.div
            key={hex.member.id}
            className="absolute"
            style={{
                width: HEX_WIDTH,
                height: HEX_HEIGHT,
                left: hex.x,
                top: hex.y,
                zIndex: hex.zIndex,
            }}
            animate={{
              x: hex.pushX, // Apply push as relative translation
              y: hex.pushY,
              opacity: hex.opacity,
              scale: hex.scale,
            }}
            transition={{ type: 'spring', stiffness: 150, damping: 20, mass: 0.8 }}
          >
            <HexagonCard
              member={hex.member}
              isHovered={hex.isHovered}
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HoneycombGrid;