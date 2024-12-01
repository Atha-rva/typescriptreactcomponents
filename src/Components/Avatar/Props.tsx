type AvatarProps = VisibilityProps & {
  name: string;
  status?:
    | "available"
    | "busy"
    | "out-of-office"
    | "away"
    | "offline"
    | "do-not-disturb"
    | "blocked";

  isAvatar: boolean;
  users?: {
    name: string;
    status?:
      | "available"
      | "busy"
      | "out-of-office"
      | "away"
      | "offline"
      | "do-not-disturb"
      | "blocked";
  }[];
  rightAvatar?: boolean;
  avatarGroupStyle?: string;
  isName?: boolean;
};

export type { AvatarProps };
