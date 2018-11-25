import React, { Component } from 'react';

class Marker extends Component {

    render() {
        for (var i = 0; i < locations.length; i++) {
            var position = locations[i].location;
            var title = locations[i].title;
            var marker = new google.maps.Marker({
                map: map,
                position: position,
                title: title,
                animation: google.maps.Animation.DROP,
                id: i
            });

            markers.push(marker);
            marker.addListener('click', function () {
                populateInfoWindow(this, largeInfowindow);
            });
        }


        return (
            <div>
{Marker}


            </div>
        )
    }
}
export default Marker;