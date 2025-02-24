import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "./ui/avatar";
import { cva, type VariantProps } from "class-variance-authority";

interface IUserAvatarProps extends VariantProps<typeof avatarVariants> {
  imageUrl: string;
  name: string;
  className?: string;
  onClick?: () => void;
}

const avatarVariants = cva("", {
  variants: {
    size: {
      default: "size-9",
      xs: "size-4",
      sm: "size-6",
      lg: "size-10",
      xl: "size-[160px]",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

// export const UserAvatar = ({
// }: IUserAvatarProps)
export const UserAvatar = ({
  imageUrl,
  name,
  className,
  size,
  onClick,
}: IUserAvatarProps) => {
  return (
    <Avatar
      className={cn(avatarVariants({ size, className }))}
      onClick={onClick}
    >
      <AvatarImage src={imageUrl} alt={name} />
    </Avatar>
  );
};
