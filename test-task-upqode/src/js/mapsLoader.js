import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: 'AIzaSyCnnPuzborof6xnvD_wWDnJRZx3Fzj6JWo',
  version: 'weekly',
  libraries: ['places'],
});

const pos = {
  lat: 40.6451589,
  lng: -74.0854286,
};

const mapOptions = {
  center: pos,
  zoom: 12,
  styles: [
    {
      featureType: 'administrative',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#444444',
        },
      ],
    },
    {
      featureType: 'landscape',
      elementType: 'all',
      stylers: [
        {
          color: '#f2f2f2',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'all',
      stylers: [
        {
          saturation: -100,
        },
        {
          lightness: 45,
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'all',
      stylers: [
        {
          visibility: 'simplified',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'all',
      stylers: [
        {
          color: '#88e9ad',
        },
        {
          visibility: 'on',
        },
      ],
    },
  ],
};

export default function initMap() {
  loader.load().then(() => {
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    const markers = [
      {
        coordinates: { lat: 40.6451589, lng: -74.0854286 },
        info:
          '<div class="info-window">' +
          '<h5 class="info-window__heading">New York</h5>' +
          '<p class="info-window__text">2005 Stokes Isle Apt. 896, New York 10010</p>' +
          '<i class="fa fa-clock-o fa-icon" aria-hidden="true"></i>' +
          '<h6 class="info-window__subheading">Work Schedule</h6>' +
          '<p class="info-window__subtext"><b>Mon - Sat:</b> 11:00-19:00,<br> <b>Sun:</b> 11:00-16:00,</p>' +
          '<i class="fa fa-phone fa-icon" aria-hidden="true"></i>' +
          '<h6 class="info-window__subheading">Head Office</h6>' +
          '<p class="info-window__subtext">(0043) 568 456 902<br> (0043) 568 456 902</p>' +
          '<i class="fa fa-envelope-o fa-icon" aria-hidden="true"></i>' +
          '<h6 class="info-window__subheading">Head Office</h6>' +
          '<p class="info-window__subtext">hello@pad.architecture<br> support@pad.architecture</p>' +
          '</div>',
      },
      {
        coordinates: { lat: 34.0192014, lng: -118.9736202 },
        info:
          '<div class="info-window">' +
          '<h5 class="info-window__heading">Los Angeles</h5>' +
          '<p class="info-window__text">2005 Stokes Isle Apt. 896, New York 10010</p>' +
          '<i class="fa fa-clock-o fa-icon" aria-hidden="true"></i>' +
          '<h6 class="info-window__subheading">Work Schedule</h6>' +
          '<p class="info-window__subtext"><b>Mon - Sat:</b> 11:00-19:00,<br> <b>Sun:</b> 11:00-16:00,</p>' +
          '<i class="fa fa-phone fa-icon" aria-hidden="true"></i>' +
          '<h6 class="info-window__subheading">Head Office</h6>' +
          '<p class="info-window__subtext">(0043) 568 456 902<br> (0043) 568 456 902</p>' +
          '<i class="fa fa-envelope-o fa-icon" aria-hidden="true"></i>' +
          '<h6 class="info-window__subheading">Head Office</h6>' +
          '<p class="info-window__subtext">hello@pad.architecture<br> support@pad.architecture</p>' +
          '</div>',
      },
      {
        coordinates: { lat: 42.3142643, lng: -71.1107147 },
        info:
          '<div class="info-window">' +
          '<h5 class="info-window__heading">Boston</h5>' +
          '<p class="info-window__text">2005 Stokes Isle Apt. 896, New York 10010</p>' +
          '<i class="fa fa-clock-o fa-icon" aria-hidden="true"></i>' +
          '<h6 class="info-window__subheading">Work Schedule</h6>' +
          '<p class="info-window__subtext"><b>Mon - Sat:</b> 11:00-19:00,<br> <b>Sun:</b> 11:00-16:00,</p>' +
          '<i class="fa fa-phone fa-icon" aria-hidden="true"></i>' +
          '<h6 class="info-window__subheading">Head Office</h6>' +
          '<p class="info-window__subtext">(0043) 568 456 902<br> (0043) 568 456 902</p>' +
          '<i class="fa fa-envelope-o fa-icon" aria-hidden="true"></i>' +
          '<h6 class="info-window__subheading">Head Office</h6>' +
          '<p class="info-window__subtext">hello@pad.architecture<br> support@pad.architecture</p>' +
          '</div>',
      },
      {
        coordinates: { lat: 42.3563981, lng: -83.3441011 },
        info:
          '<div class="info-window">' +
          '<h5 class="info-window__heading">Detroit</h5>' +
          '<p class="info-window__text">2005 Stokes Isle Apt. 896, New York 10010</p>' +
          '<i class="fa fa-clock-o fa-icon" aria-hidden="true"></i>' +
          '<h6 class="info-window__subheading">Work Schedule</h6>' +
          '<p class="info-window__subtext"><b>Mon - Sat:</b> 11:00-19:00,<br> <b>Sun:</b> 11:00-16:00,</p>' +
          '<i class="fa fa-phone fa-icon" aria-hidden="true"></i>' +
          '<h6 class="info-window__subheading">Head Office</h6>' +
          '<p class="info-window__subtext">(0043) 568 456 902<br> (0043) 568 456 902</p>' +
          '<i class="fa fa-envelope-o fa-icon" aria-hidden="true"></i>' +
          '<h6 class="info-window__subheading">Head Office</h6>' +
          '<p class="info-window__subtext">hello@pad.architecture<br> support@pad.architecture</p>' +
          '</div>',
        // image: 'images/1.png',
      },
    ];

    const marker1 = document.querySelector('#marker1');
    marker1.addEventListener('click', () => {
      addMarker(markers[0]);
    });
    const marker2 = document.querySelector('#marker2');
    marker2.addEventListener('click', () => {
      addMarker(markers[1]);
    });
    const marker3 = document.querySelector('#marker3');
    marker3.addEventListener('click', () => {
      addMarker(markers[2]);
    });
    const marker4 = document.querySelector('#marker4');
    marker4.addEventListener('click', () => {
      addMarker(markers[3]);
    });

    function addMarker(properties) {
      const marker = new google.maps.Marker({
        position: properties.coordinates,
        map: map,
        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
      });

      if (properties.image) {
        marker.setIcon(properties.image);
      }

      if (properties.info) {
        const InfoWindow = new google.maps.InfoWindow({
          content: properties.info,
        });

        marker.addListener('click', function () {
          InfoWindow.open(map, marker);
        });
        new google.maps.event.trigger(marker, 'click');
      }
    }
  });
}
