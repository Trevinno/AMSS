import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './css/Portfolio.css';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


class Jaime extends Component {
  render() {
    return(
      <div style={{textAlign: 'center'}}>
        <Grid>
          <Cell col={2}>
            <div style={{textAlign: 'center', justifyContent: 'center',
                  alignItems: 'center'}, {paddingTop: '2em'}}   >
              <img
                src="https://i.ibb.co/x1HMCG8/099980.jpg"
                alt="avatar"
                style={{height: '200px'}}
                 />
                 {/* <Avatar 
                 alt="Cristina Perez" 
                 src="https://i.ibb.co/yPkzTHq/099940.jpg"
                 className='center'
                  /> */}

            </div>

            <h2 style={{paddingTop: '0.2em'}}>Jaime Gomez</h2>
            {/* <h4 style={{color: 'grey'}}>Artista</h4> */}
            {/* <TextField
            id="standard-name"
            label="hola"
            value="this is it folks"
            margin="normal"
            /> */}
            <div className="row"> 
            <div className="column">
            <TextField
            id="filled-name"
            label="e-mail"
            value="jaimegomezg@gmail.com"
            margin="normal"
            variant="filled"
            />

            <TextField
            id="filled-name"
            label="Country"
            value="Mexico"
            margin="normal"
            variant="filled"
            />
            </div>

            <div className="column">
            
            <TextField
            id="filled-name"
            label="Username"
            value="JaimeG"
            margin="normal"
            variant="filled"
            />

            <TextField
            id="filled-name"
            label="State"
            value="Nuevo Leon"
            margin="normal"
            variant="filled"
            />

            </div>
          

            <div className="column">
            

            <TextField
            id="filled-name"
            label="Occupation"
            value="Artist"
            margin="normal"
            variant="filled"
            />

            <TextField
            id="filled-name"
            label="City"
            value="Monterrey"
            margin="normal"
            variant="filled"
            />

            </div>
            </div>
            <br/>
            <Button variant="contained" color="primary">
            Message Artist
            </Button>


            <div className="row">
            <div className="column">
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <img
                src="https://i.ibb.co/zsFLJqy/61-original.png"
                alt="picture airplane"
                style={{height: '300px'}}
                 />
            <p> Looking at airplane</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <img
                src="https://i.ibb.co/0jyGyc5/139-original.png"
                alt="picture new york"
                style={{height: '300px'}}
                 />
            <p> Gloomy Night</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <img
                src="https://i.ibb.co/hFBQ3X4/6-original.png"
                alt="picture sad"
                style={{height: '300px'}}
                 />
            <p> Inner anxiety</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

            </div>


            <div className="column">
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <img
                src="https://i.ibb.co/Fwd0Fjn/17-original.png"
                alt="park picture"
                style={{height: '300px'}}
                 />
            <p> The Park</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <img
                src="https://i.ibb.co/6mm5pTq/326-original.png"
                alt="picture new york"
                style={{height: '300px'}}
                 />
            <p> Astronomy</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <img
                src="https://i.ibb.co/F3wSGGd/59-original.png"
                alt="red wine"
                style={{height: '300px'}}
                 />
            <p> Red Red Wine</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

            </div>



            <div className="column">


            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <img
                src="https://i.ibb.co/88S9G87/51-original.png"
                alt="horsey"
                style={{height: '300px'}}
                 />
            <p> Whitedash</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <img
                src="https://i.ibb.co/yhGk1xN/348-original.png"
                alt="mexican woman"
                style={{height: '300px'}}
                 />
            <p> Frida</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <img
                src="https://i.ibb.co/BypGLwC/349-original.png"
                alt="scary scene"
                style={{height: '300px'}}
                 />
            <p> Scary Vibes</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

            </div>
            </div>


          </Cell>
          <Cell className="resume-right-col" col={8}>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Jaime;
