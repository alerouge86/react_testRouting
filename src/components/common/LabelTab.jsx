import Badge from "@material-ui/core/Badge";

const LabelTab = ({ children, badgeContent }) => {
  return (
    <Badge badgeContent={badgeContent} color="error">
      {children}
    </Badge>
  );
};

export default LabelTab;
