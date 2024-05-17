import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';
function UploadImage() {
    const [image, setImage] = useState(null);
    const { id } = useParams();
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };
    const history = useHistory();

    const handleImageUpload = async () => {
        if (image) {
            const formData = new FormData();
            formData.append('image', image);

            try {
                const response = await fetch(`http://localhost:8083/product/${id}/upload-image`, {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    console.log('Image uploaded successfully.');
                    history.push("/productsall")

                } else {
                    console.error('Image upload failed.');
                }
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    };

    return (
        <div>

            <div >
                <Button className='back-btn' variant="contained" color="primary" align="center" onClick={() => history.push("/productsall")}>Back</Button>
            </div>

            <div className='upload-img'>
                <h4>Choose photo</h4>
                <input type="file" accept="image/*" onChange={handleImageChange} className='upload' />
                <Button variant="text" onClick={() => handleImageUpload()} color="primary" align="center">Add Product</Button>
            </div>
        </div>
    );
}

export default UploadImage;
