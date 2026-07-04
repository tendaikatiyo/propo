/**
 * Shared interaction motion — Press/Tap feedback, Hover, Ease-out.
 * Vocabulary: `.cursor/skills/animation/SKILL.md`
 */

/** Default ease-out for UI that responds to the user. */
export const motionEase =
  "transition-[transform,opacity,background-color,border-color,box-shadow,color] duration-200 ease-out";

/** Press / Tap feedback — subtle scale-down on click (buttons, pills). */
export const motionPress = "motion-press";

/** Stronger press for icon-only targets (44px touch areas). */
export const motionPressIcon = "motion-press-icon";

/** List rows and menu items — light press + opacity. */
export const motionRow = "motion-row";

/** Cards with overlay links — scale when child link/button is active. */
export const motionCard = "motion-card-press";

/** Sidebar and text nav links. */
export const motionNav = "motion-nav";
