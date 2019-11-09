import React from 'react';

import MenuItem from './MenuItem';

import './css/Homepage.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Retratos',
          imageUrl: 'https://i.ibb.co/CBnQPQF/Retrato-Chavo.png',
          id: 1,
          linkUrl: 'retratos'
        },
        {
          title: 'Animales',
          imageUrl: 'https://i.ibb.co/cbJbD57/1500395606-864116-1500447827-noticia-normal.jpg',
          id: 2,
          linkUrl: 'animales'
        },
        {
          title: 'Naturaleza',
          imageUrl: 'https://i.ibb.co/XYN4ZWd/tucan-0.jpg',
          id: 3,
          linkUrl: 'naturaleza'
        },
        {
          title: 'Anatomina',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'anatomia'
        },
        {
          title: 'Cultura Pop',
          imageUrl: 'https://i.ibb.co/3zKL9px/popart.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'culturapop'
        },
        {
          title: 'Caricaturas',
          imageUrl: 'https://i.ibb.co/nfzL1R4/Cartoons.png',
          size: 'large',
          id: 5,
          linkUrl: 'caricaturas'
        },
        {
          title: 'Comics',
          imageUrl: 'https://i.ibb.co/JsCRDFf/Comics.png',
          size: 'large',
          id: 5,
          linkUrl: ''
        }
      ]
    };
  }

  render() {
    return (
    <div className='homepage'>
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    </div>
    );
  }
}

export default Directory;