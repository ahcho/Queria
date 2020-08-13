import React from 'react';

class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.user.email,
            id: this.props.user.id,
            first_name: this.props.user.first_name,
            last_name: this.props.user.last_name,
            photoFile: null
        }
    }

    componentDidMount() {
        this.props.fetchUser(this.props.user.id);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleProfilePhoto(e) {
        this.setState({ photoFile: e.currentTarget.files[0]}, () =>
            this.handleSubmit());        
    }

    handleSubmit() {
        
        //e.preventDefault();
        const formData = new FormData();
        // formData.append('user[first_name]', this.state.first_name);
        // formData.append('user[last_name]', this.state.last_name);
        if (this.state.profileFile) {
            formData.append('user[profile_photo]', this.state.profileFile)
        }
        this.props.editUser(formData, this.state.id);
    }

    hasProfilePhoto() {
        if (this.props.user.profilePhotoUrl === undefined) {
            <div>
                <img id='profile-img' src={this.props.user.profilePhotoUrl} />
            </div>
         } else {
                <i id='profile-img' className="fas fa-user-circle"></i>
         }
    }

    render() {
        return (
            <div className='profile-top'>
                <div className="image-upload">
                    <label htmlFor="file-input">
                        {this.hasProfilePhoto()}
                        <i id='profile-img' className="fas fa-user-circle"></i>
                    </label>
                    <input id="file-input"
                        type="file"
                        onChange={this.handleProfilePhoto.bind(this)} />
                </div>

                <h1 id='profile-name'>{this.props.user.first_name} {this.props.user.last_name}</h1>
            </div>
        )

    }
}

export default EditProfile;