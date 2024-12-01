import * as React from "react";
import { useStyles } from "./AvtarStyle";
import {
  Avatar,
  AvatarGroup,
  AvatarGroupItem,
  AvatarGroupPopover,
  mergeClasses,
} from "@fluentui/react-components";
import { Lato } from "../../assets/desginPattern/font/fontFamily/golbalFontFamily";
import { AvatarProps } from "./Props";
export const ZAvatar: React.FC<AvatarProps> = (props) => {
  const styles = useStyles();
  Lato();
  const {
    name,
    isAvatar,
    users,
    rightAvatar,
    isVisible = true,
    disabled = false,
    isName = true,
  } = props;
  const [isShowAvatar] = React.useState<boolean>(isAvatar);
  const [avatarUsers] = React.useState(users || []);
  const mergedClass = mergeClasses(
    rightAvatar ? styles.avatarGroup : styles.avatarGroupClass,
    props.avatarGroupStyle
  );
  return (
    <div
      className={mergeClasses(
        !isVisible && styles.invisible,
        disabled && styles.disabled
      )}
    >
      <AvatarGroup layout="stack" className={mergedClass}>
        <Avatar
          name={name}
          badge={
            !isShowAvatar
              ? {
                  status: undefined,
                }
              : undefined
          }
        />
        {isShowAvatar ? (
          <AvatarGroupPopover>
            {avatarUsers.map((username, uindex) => {
              return (
                <div>
                  {rightAvatar ? (
                    <></>
                  ) : (
                    <AvatarGroupItem
                      name={username.name}
                      badge={{ status: username.status }}
                      key={uindex}
                    />
                  )}
                </div>
              );
            })}
          </AvatarGroupPopover>
        ) : isName ? (
          name && <span className={styles.avatarTitle}>{name}</span>
        ) : null}
      </AvatarGroup>
    </div>
  );
};
