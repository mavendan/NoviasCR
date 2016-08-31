"use strict";
var React = require('react');

var ImageUpload = React.createClass({

getInitialState () {
    console.log('Image initialstate-');

    return {
      file: '',imagePreviewUrl: ''
    };
  },

  _handleSubmit(e) {
   /* console.log('Image handleSubmit-');
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);*/
  },

  _handleImageChange(e) {
      console.log('Image handleImageChange-');
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  },

  render() {
      console.log('Image render: ', this.state);
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div>Please select an Image for Preview</div>);
    }
     console.log('Done with ImagePreview.. now doing return-');
    return (
      <div >
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input  type="file" onChange={(e)=>this._handleImageChange(e)} />
          <button type="submit" onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }

//}
});
//var ImageUploader = new ImageUpload();



module.exports = ImageUpload;

//React.render(<ImageUpload/>, document.getElementById("uploadImage"));