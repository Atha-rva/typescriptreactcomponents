declare global {
  type VisibilityProps = {
    /**
     * Determines whether the component is visible or not.
     *
     * @default true
     */
    isVisible?: boolean;

    /**
     * Disables the component if true.
     *
     * @default false
     */
    disabled?: boolean;
  };
}

// This is required to make the file a module and prevent TypeScript errors
export {};
