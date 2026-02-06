import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { TeamMember } from '@/data/team';
import { cn } from '@/lib/utils';
import { AnimatedTeamCard } from '@/pages/Team';

interface AnimatedHoneycombGridProps {
  members: TeamMember[];
}

// Fixed dimensions from Hexagon.css
const HEX_DEFAULT_WIDTH = 350;
const HEX_DEFAULT_HEIGHT = 404;
const HEX_DEFAULT_MARGIN_SINGLE_SIDE = 25; // Original CSS margin: 25px; means 25px on each side of the box

// Total effective width/height including margin for spacing purposes
const EFFECTIVE_HEX_WIDTH = HEX_DEFAULT_WIDTH + (HEX_DEFAULT_MARGIN_SINGLE_SIDE * 2);
const EFFECTIVE_HEX_HEIGHT = HEX_DEFAULT_HEIGHT + (HEX_DEFAULT_MARGIN_SINGLE_SIDE * 2);

const AnimatedHoneycombGrid: React.FC<AnimatedHoneycombGridProps> = ({ members }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const initialPositions = useMemo(() => {
    const positions: { member: TeamMember; x: number; y: number; originalIndex: number }[] = [];
    let currentMemberIndex = 0;

    // Layout configuration: 2-3-2
    const layoutConfig = [
        { count: 2, rowNum: 0 },
        { count: 3, rowNum: 1 },
        { count: 2, rowNum: 2 },
    ];
    
    // Vertical spacing between rows, considering the overlap from hex height and margins
    const verticalRowSpacing = HEX_DEFAULT_HEIGHT * 0.75 + (HEX_DEFAULT_MARGIN_SINGLE_SIDE * 2); // Roughly hex_height * 3/4 + total margin

    let currentY = 0;
    let gridMaxX = 0; // To calculate the widest part of the grid for overall centering

    layoutConfig.forEach((rowConf, rowIndex) => {
        const rowWidth = rowConf.count * EFFECTIVE_HEX_WIDTH;
        
        // Calculate starting X to center the current row
        // We'll adjust this overall later if the grid becomes wider
        const rowStartX = 0;

        // Special handling for the middle row of 3 to stagger it slightly if desired, or just center it.
        // For a perfect 2-3-2, the middle row of 3 should be centered.
        // The top/bottom rows of 2 should also be centered relative to the whole grid.

        for (let i = 0; i < rowConf.count && currentMemberIndex < members.length; i++) {
            const member = members[currentMemberIndex];
            
            // Calculate X position relative to the start of the current row
            const x = rowStartX + i * EFFECTIVE_HEX_WIDTH;

            positions.push({
                member: member,
                x: x,
                y: currentY,
                originalIndex: currentMemberIndex,
            });
            currentMemberIndex++;
        }
        gridMaxX = Math.max(gridMaxX, rowWidth); // Track max width
        currentY += verticalRowSpacing;
    });

    // Now, calculate overall grid width for centering and adjust all cards' x positions
    const finalGridWidth = gridMaxX; // Assuming gridMaxX correctly captures the widest row's span
    
    return positions.map(p => {
        // Find which row this card belongs to based on its original index
        let rowCount = 0;
        let rowIndex = 0;
        let cumulativeCount = 0;
        for(let i = 0; i < layoutConfig.length; i++) {
            cumulativeCount += layoutConfig[i].count;
            if (p.originalIndex < cumulativeCount) {
                rowCount = layoutConfig[i].count;
                rowIndex = i;
                break;
            }
        }

        const actualRowWidth = rowCount * EFFECTIVE_HEX_WIDTH;
        // Calculate offset to center current row within the finalGridWidth
        const rowCenterOffset = (finalGridWidth - actualRowWidth) / 2;

        return { ...p, x: p.x + rowCenterOffset };
    });

  }, [members]);

  const hexGridWithPush = useMemo(() => {
    const hoveredHex = hoveredId ? initialPositions.find(p => p.member.id === hoveredId) : null;

    return initialPositions.map(hex => {
      let pushX = 0;
      let pushY = 0;
      let opacity = 1;
      let scale = 1;
      const zIndex = hex.member.id === hoveredId ? 10 : 1; // zIndex for hovered card

      const isCurrentlyHovered = hex.member.id === hoveredId;

      if (hoveredHex && !isCurrentlyHovered) {
        const dx = hex.x - hoveredHex.x;
        const dy = hex.y - hoveredHex.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const effectiveHexagonSize = HEX_DEFAULT_WIDTH; // Using width as a base for push magnitude

        const maxPushDistance = effectiveHexagonSize * 1.5; // Cards within this radius are affected
        const minPush = 20; // Minimum push in pixels
        const maxPush = 60; // Maximum push in pixels

        if (distance < maxPushDistance && distance > 0) {
          const normalizedDistance = Math.min(distance / maxPushDistance, 1);
          let pushFactor = (1 - normalizedDistance) ** 2; // Quadratic falloff for a softer, more magnetic feel
          pushFactor = Math.max(0, pushFactor);

          const currentPushAmount = minPush + (maxPush - minPush) * pushFactor;
          
          if (distance > 0) {
            pushX = (dx / distance) * currentPushAmount;
            pushY = (dy / distance) * currentPushAmount;
          }

          scale = 1 - (0.05 * pushFactor); // Max 5% scale down
          opacity = 1 - (0.2 * pushFactor); // Max 20% dim
          opacity = Math.max(0.7, opacity); // Don't let it go too dim
        }
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
  }, [initialPositions, hoveredId]);


  const handleHoverStart = useCallback((id: number) => {
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
    const minX = Math.min(...initialPositions.map(p => p.x));
    const minY = Math.min(...initialPositions.map(p => p.y));

    // Add full hex width/height to get total dimensions
    return {
      width: (maxX - minX) + HEX_DEFAULT_WIDTH,
      height: (maxY - minY) + HEX_DEFAULT_HEIGHT,
    };
  }, [initialPositions]);

  return (
    <div className="overflow-x-auto overflow-y-hidden max-w-full"> {/* Allow horizontal scrolling */}
      <div
        className="relative flex items-center justify-center min-h-screen py-10 px-4"
        style={{ minWidth: gridDimensions.width }} // Ensure inner div is wide enough for content
      >
        <motion.div
          className="relative"
          style={{ width: gridDimensions.width, height: gridDimensions.height }}
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          animate={{
              scale: hoveredId ? 0.95 : 1, // Slight scale down of entire grid
              opacity: hoveredId ? 0.95 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 20,
            mass: 0.5,
            delayChildren: 0.2,
            staggerChildren: 0.05
          }}
        >
          {hexGridWithPush.map((hex) => (
            <motion.div
              key={hex.member.id}
              className="absolute"
              style={{
                  left: hex.x,
                  top: hex.y,
                  zIndex: hex.zIndex,
              }}
              animate={{
                x: hex.pushX,
                y: hex.pushY,
                opacity: hex.opacity,
                scale: hex.scale,
              }}
              transition={{ type: 'spring', stiffness: 150, damping: 20, mass: 0.8 }}
            >
              <AnimatedTeamCard
                member={hex.member}
                isHovered={hex.isHovered}
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedHoneycombGrid;
