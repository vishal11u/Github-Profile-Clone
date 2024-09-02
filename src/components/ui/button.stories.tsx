import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { action } from "@storybook/addon-actions";
import { FaBeer, FaCoffee, FaApple, FaHeart } from "react-icons/fa";

const meta: Meta<typeof Button> = {
  title: "Components/UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      description: "Button Variants",
      options: [
        "default",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      description: "Button Size",
      options: ["sm", "default", "lg", "icon"],
    },
    icon: {
      control: "select",
      description: "Icon to display in the button",
    },
    label: {
      control: "text",
      description: "Text label for the button",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "sm",
    disabled: false,
    onClick: action("default-click"),
    label: "Default Button",
    className: "shadow-lg",
    icon: <FaBeer />,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "default",
    disabled: false,
    onClick: action("secondary-click"),
    label: "Secondary Button",
    className: "shadow-md",
    icon: <FaCoffee />,
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    size: "lg",
    disabled: false,
    onClick: action("destructive-click"),
    label: "Destructive Button",
    className: "bg-red-500 text-white",
    icon: <FaApple />,
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "lg",
    disabled: false,
    onClick: action("outline-click"),
    label: "Outline Button",
    className: "border-2 border-blue-500 text-blue-500",
    icon: <FaHeart />,
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "sm",
    disabled: false,
    onClick: action("ghost-click"),
    label: "Ghost Button",
    className: "text-gray-500",
    icon: <FaBeer />,
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    size: "lg",
    disabled: false,
    onClick: action("link-click"),
    label: "Link Button",
    className: "text-blue-600 underline",
    icon: <FaCoffee />,
  },
};
