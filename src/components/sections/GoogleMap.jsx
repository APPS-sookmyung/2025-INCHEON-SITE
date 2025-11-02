import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from '@vis.gl/react-google-maps';
import {spaceLocations} from '../../data/spaceLocations';
import {useParams} from 'react-router-dom';
import {useState} from 'react';
import x from '../../assets/svg/x.svg';

const GoogleMap = () => {
  const {id} = useParams();
  const [activeMarker, setActiveMarker] = useState(null);
  const spaceLocation = spaceLocations.find(
    (space) => Number(space.id) === Number(id)
  );
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapId = import.meta.env.VITE_GOOGLE_MAPS_ID;
  const position = {lat: spaceLocation.lat, lng: spaceLocation.lng};

  return (
    <div className='w-full'>
      <APIProvider apiKey={apiKey} libraries={['marker']}>
        <div className='mx-auto h-65 md:h-90 lg:h-125'>
          <Map defaultZoom={13} defaultCenter={position} mapId={mapId}>
            {spaceLocations.map((space) => (
              <div key={space.id}>
                <AdvancedMarker
                  position={{lat: space.lat, lng: space.lng}}
                  onClick={() => setActiveMarker(space.id)}>
                  <Pin
                    background={
                      Number(space.id) === Number(id) ? '#f4ced2' : '#bcd5ee'
                    }
                    borderColor='none'
                    glyphColor='#f6f1e1'
                  />
                </AdvancedMarker>

                {space.id === activeMarker && (
                  <InfoWindow position={{lat: space.lat, lng: space.lng}}>
                    <div className='pt-4 p-2 relative flex flex-col font-family-sans leading-tight text-[10px] md:text-sm space-y-1'>
                      <button
                        className='absolute right-0 -translate-y-4 outline-none'
                        onClick={() => setActiveMarker(null)}>
                        <img src={x} alt='닫기' className='w-3 h-3' />
                      </button>
                      <h1
                        style={{
                          WebkitTextStrokeWidth: '0.5px',
                        }}
                        className='text-type-head-2'>
                        {space.name}
                      </h1>
                      <p className=' text-black'>{space.address}</p>
                    </div>
                  </InfoWindow>
                )}
              </div>
            ))}
          </Map>
        </div>
      </APIProvider>
    </div>
  );
};

export default GoogleMap;
