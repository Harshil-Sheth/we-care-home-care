import React from 'react';
import BOOK_NOW_DATA from './book-now.data.js'
import SubservicePreview from '../../components/preview-subservice/subservice-preview.component';

class BookNowPage extends React.Component{
  constructor(props){
  super(props);

  this.state = {
      collections : BOOK_NOW_DATA
  
};
}
    render() {
        const {collections} = this.state;
    return (
      <div className='booknowpage'>
      {collections.map(({id, ...otherCollectionProps}) =>(
        <SubservicePreview key={id} {...otherCollectionProps} />
      ))}
      </div>
    );
  };
};
export default BookNowPage;