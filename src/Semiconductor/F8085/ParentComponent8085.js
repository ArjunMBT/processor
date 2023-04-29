import React, { Component } from 'react';
import SearchArray8085 from '../F8085/SearchArray8085'

class ParentComponent8085 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataArray: [
        {id:0,
            name:'',
            description:'',
            date:'',
            location:''
          
        },
        {
          id: 1,
          name: 'Item 1',
          description: 'This is the first item.',
          date: '2022-01-01',
          location: 'New York'
        },
        {
          id: 2,
          name: 'Item 2',
          description: 'This is the second item.',
          date: '2022-01-02',
          location: 'Los Angeles'
        },
        {
          id: 3,
          name: 'Item 3',
          description: 'This is the third item.',
          date: '2022-01-03',
          location: 'Chicago'
        }
      ]
    };
  }

  render() {
    const { dataArray } = this.state;

    return (
      <div>
       <SearchArray8085 dataArray={dataArray} />
      </div>
    );
  }
}

export default ParentComponent8085;
