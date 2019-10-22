import React from 'react';
import NotFoundPage from './NotFoundPage';

class PagesViews extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
      pageData: false
    };
    this.createMarkup = this.createMarkup.bind();
  }

  componentDidMount( props ) {
    let slug = this.props.slug;
    fetch( `/wp-json/wp/v2/pages?slug=${slug}` )
      .then( response => response.json() )
      .then( data => {
        if(Object.keys(data).length === 0){
          fetch( `/wp-json/wp/v2/posts?slug=${slug}` )
            .then( response => response.json() )
            .then( data => {
              if(Object.keys(data).length === 0){

              } else {
                this.setState( {
                  pageData: data[ 0 ]
                } );
              }
            } );
        } else {
          this.setState( {
            pageData: data[ 0 ]
          } );
        }
      } );
  }

  createMarkup( html ) {
    return { __html: html };
  }

  render() {

    const is404 = this.state.pageData;
    return (
      <div>
        { false === is404 || typeof is404 === 'undefined' ? <NotFoundPage /> : (
            <div className="entry">
              <div className="entry-content" dangerouslySetInnerHTML={this.createMarkup( this.state.pageData.content.rendered )}/>
            </div>
          )}
      </div>
    );

  }
}

export default PagesViews;
