import React, {Fragment} from 'react';

import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar/Avatar";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction";

import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';


const CartItem = (props) => (
  <Fragment>
    {
      props.cart.cartProducts &&
      props.cart.cartProducts.map((item, key) =>
        <ListItem key={key}>
          <ListItemAvatar>
            <Avatar alt={item.name} src={item.thumbnailImage} />
          </ListItemAvatar>
          <ListItemText
            primary={item.name}
            secondary={item.salePrice}
          />
          {console.log('car item', props)}
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => props.cart.removeProduct(key)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )
    }
  </Fragment>
);

export default CartItem;