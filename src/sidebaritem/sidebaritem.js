import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeHtmlTags } from "../helper";

class SideBarItemComponent extends React.Component {
  render() {
    const { index, note, classes, selectedNoteIndex } = this.props;
    return (
      <div key={index}>
        <ListItem
          className={classes.listItem}
          selected={selectedNoteIndex === index}
          alignItems="flex-start"
        >
          <div
            className={classes.textSection}
            onClick={() => this.selectNote(note, index)}
          >
            <ListItemText
              primary={note.title}
              secondary={removeHtmlTags(note.body.substring(0, 30)) + "...."}
            />
          </div>
          <DeleteIcon
            onClick={() => this.deleteNote(note)}
            className={classes.deleteIcon}
          />
        </ListItem>
      </div>
    );
  }

  selectNote = (n, i) => {
    this.props.selectNote(n, i);
  };

  deleteNote = note => {
    if (window.confirm(`Are you sure you want to delete ${note.title}`)) {
      this.props.deleteNote(note);
    }
  };
}

export default withStyles(styles)(SideBarItemComponent);
