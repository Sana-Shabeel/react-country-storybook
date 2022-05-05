import Country from "./Country";

export default {
  title: "components/Country",
  component: Country,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    padding: { control: "number", defaultValue: 10 },
    width: { control: "number", defaultValue: 320 },
    borderRadius: { control: "number", defaultValue: 10 },
  },
};

export const Component = (args) => <Country {...args} />;
