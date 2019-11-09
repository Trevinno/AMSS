import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import './css/Feed.css'
import { fontSize } from "@material-ui/system";


const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    }
  }));

export default function Feed() {
const classes = useStyles();
  return (
    <div>
      
      <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
    <li className="breadcrumb-item" style={{
        left: '35%'
        }} >35 Total Posts</li>
    <li className="breadcrumb-item" style={{
        left: '35%',
        }}>2 New Posts</li>
    <li className="breadcrumb-item"  style={{
        left: '35%',
        }}> 4 Subscribers</li>
    </ol>
    </nav>

    <p className="center3">The yellow umbrella</p>
    <div className="center2">
        <img
            src="https://i.ibb.co/3Cf4cPv/304-original.png"
            alt="umbrella"
            style={{
                height: '400px',
                width: '400px',
                left: '5px'
            }}
            />

        <div className="center"> 
            <img
                src="https://i.ibb.co/x1HMCG8/099980.jpg"
                alt="avatar"
                style={{
                height: '80px',
                width: '80px'
                }}
                    />
        Jaime Gomez
        </div> 
        <div>
        <Button 
        variant="contained" 
        className={classes.margin}
        color="primary" 
        size="small"
        style={{
            height: '50x',
            width: '160px',
            left: '220px',
            top: '1px'
        }}>
            Explore
        </Button>
        </div>
        <Button 
        variant="contained" 
        className={classes.margin}
        color="secondary" 
        size="small"
        style={{
            height: '20x',
            width: '160px',
            left: '220px',
            top: '-10px'
        }}>
            Add to Cart
        </Button>

    </div>
    <p className="center3">Happy Couple</p>
    <div className="center2">
        <img
            src="https://i.ibb.co/NtW6bM4/253-original.png"
            alt="happy couple"
            style={{
                height: '400px',
                width: '400px',
                left: '5px'
            }}
            />

        <div className="center"> 
            <img
                src="https://i.ibb.co/x1HMCG8/099980.jpg"
                alt="avatar"
                style={{
                height: '80px',
                width: '80px'
                }}
                    />
        Jaime Gomez
        </div> 
        <div>
        <Button 
        variant="contained" 
        className={classes.margin}
        color="primary" 
        size="small"
        style={{
            height: '50x',
            width: '160px',
            left: '220px',
            top: '1px'
        }}>
            Explore
        </Button>
        </div> 
        <Button 
        variant="contained" 
        className={classes.margin}
        color="secondary" 
        size="small"
        style={{
            height: '20x',
            width: '160px',
            left: '220px',
            top: '-10px'
        }}>
            Add to Cart
        </Button>  
    </div>

    <p className="center3"> Cooking Thoughts</p>
    <div className="center2">
        <img
            src="https://i.ibb.co/X7xDBjy/11-original-png-1000h.jpg"
            alt="umbrella"
            style={{
                height: '400px',
                width: '400px',
                left: '5px'
            }}
            />

        <div className="center"> 
            <img
                src="https://i.ibb.co/JkRPh9W/059998.jpg"
                alt="avatar"
                style={{
                height: '80px',
                width: '80px'
                }}
                    />
        Isabel Guardia
        </div> 
        <div>
        <Button 
        variant="contained" 
        className={classes.margin}
        color="primary" 
        size="small"
        style={{
            height: '50x',
            width: '160px',
            left: '220px',
            top: '1px'
        }}>
            Explore
        </Button>
        </div>  
        <Button 
        variant="contained" 
        className={classes.margin}
        color="secondary" 
        size="small"
        style={{
            height: '20x',
            width: '160px',
            left: '220px',
            top: '-10px'
        }}>
            Add to Cart
        </Button>   
    </div>

    </div>
  );
}
