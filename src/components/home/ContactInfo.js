import React from 'react';

class ContactInfo extends React.Component {
    render() {
        return (
            <div className="ContactInfo">
                <br/>
                <div class="container">
                    <h3>Contacts</h3>
                    <div class="alert alert-info">
                       <div>
                           <strong>Reservation:</strong> 0882091255.
                       </div>
                        <div>
                            <strong>Information:</strong> 0882091221.
                        </div>
                        <div>
                            <strong>Information:</strong> 0882091232.
                        </div>
                    </div>

                </div>
                <br />
            </div>
        )
    }
}
export default ContactInfo;