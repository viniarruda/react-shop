import React from 'react';
import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CardLink from './card-link'

const CardProduct = styled(Card)`
  max-width: 345px;
`;

const Media = styled(CardMedia)`
  height: 140px;
`;


const CardList = (props) => (
  <CardProduct>
    <CardActionArea>
      <Media
        image={props.product.mediumImage}
        title={props.product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {props.product.name}
        </Typography>
        <Typography component="p">
          {props.product.shortDescription}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
      <CardLink to={`/product/${props.product.itemId}`}>
        Ver mais
      </CardLink>
    </CardActions>
  </CardProduct>
);

export default CardList;