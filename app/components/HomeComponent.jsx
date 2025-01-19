import Button from '@mui/material/Button';
import {useNavigate} from '@remix-run/react';

export function HomeComponent({data}) {
  const navigate = useNavigate();
  // console.log(data);
  try {
    JSON.stringify(data);
  } catch (error) {
    console.error('Data is not serializable:', error);
  }

  const handleButtonClick = async () => {
    try {
      const resolvedRecommendedProducts = await data.recommendedProducts; // Resolve the promise
      const serializableData = {
        recommendedProducts: resolvedRecommendedProducts, // Use resolved data
        featuredCollection: data.featuredCollection, // Already serializable
      };

      navigate('/order_page', {state: {products: serializableData}});
    } catch (error) {
      console.error('Error resolving data before navigation:', error);
    }
  };

  return (
    <div>
      <section
        style={{
          height: '100vh',
          width: '100vw',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Image */}
        <img
          src="/assets/pizza-landing-page5.jpg"
          alt="Pizza"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minHeight: '100vh',
            minWidth: '100vw',
            objectFit: 'cover',
          }}
        />
        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background:
              'radial-gradient(circle, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.8) 100%)',
          }}
        />
        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            color: '#fff',
            textAlign: 'center',
          }}
        >
          <div style={{width: '60%'}}>
            <h3>
              PLACE AN ORDER <br />
              GET FRESH INGREDIENTS <br />
              ENJOY MAKING PIZZA AT HOME
            </h3>
            <Button className="main-button" onClick={handleButtonClick}>
              TURN UP THE HEAT!
            </Button>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section
        style={{
          padding: '3rem 1rem',
          backgroundColor: '#f9f9f9',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <div style={{flex: '1 1 30%', margin: '1rem', textAlign: 'center'}}>
            <h3 style={{color: '#333333'}}>1. Choose your subscription pack</h3>
            <p style={{color: '#333333'}}>
              Select the perfect pizza kit plan that fits your cravings.
            </p>
          </div>
          <div style={{flex: '1 1 30%', margin: '1rem', textAlign: 'center'}}>
            <h3 style={{color: '#333333'}}>2. Personalize your pizza plan</h3>
            <p style={{color: '#333333'}}>
              Customize your kit with your favorite dough, toppings, and
              delivery frequency.
            </p>
          </div>
          <div style={{flex: '1 1 30%', margin: '1rem', textAlign: 'center'}}>
            <h3 style={{color: '#333333'}}>
              3. Get your pizza kit at your door
            </h3>
            <p style={{color: '#333333'}}>
              Receive your kit, cook delicious pizzas, and enjoy with family and
              friends.
            </p>
          </div>
        </div>
      </section>

      {/* Ingredients Showcase Section */}
      {/* Dough */}
      <section
        style={{
          backgroundColor: '#008557',
          minHeight: '70vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          className="flex-container-reverse"
          style={{
            width: '90%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // flexWrap: 'wrap',
            gap: '7rem', // Ensures spacing between columns

            //flexDirection: 'column-reverse',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexBasis: '48%', // Allowing each column to take up to 45% of the container width
              flexGrow: 1,
              minWidth: '350px', // Ensures columns don't get too narrow
              boxSizing: 'border-box', // Ensures padding is included in the width calculation
            }}
          >
            <img
              src="/assets/pizza-dough.jpg"
              alt="Pizza Dough 1"
              style={{
                width: '100%',
                maxWidth: '550px',
                objectFit: 'contain',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              flexBasis: '48%', // Same as the other column
              flexGrow: 1,
              minWidth: '350px',
              boxSizing: 'border-box',
              maxWidth: '550px',
              flexDirection: 'column',
            }}
          >
            <h3 style={{color: 'white', textAlign: 'left'}}>PIZZA DOUGH</h3>
            <p
              style={{
                color: 'white',
                fontSize: '20px',
              }}
            >
              Freshly prepared dough, made daily with high-quality ingredients
              to ensure the perfect base for your favorite toppings! Our dough
              is crafted using a traditional recipe, allowing it to develop a
              rich flavor and light, airy texture. It's hand-stretched and
              prepped to perfection, providing a crispy exterior with a soft,
              fluffy interior in every bite. Whether you prefer classic
              Margherita or loaded supreme, our dough is the ideal canvas for
              your pizza creations!
            </p>
          </div>
        </div>
      </section>

      {/* Tomato */}
      <section
        style={{
          backgroundColor: '#F3F3FC',
          minHeight: '70vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          className="flex-container"
          style={{
            width: '90%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // flexWrap: 'wrap',
            gap: '7rem', // Ensures spacing between columns

            //flexDirection: 'column-reverse',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              flexBasis: '48%', // Same as the other column
              flexGrow: 1,
              minWidth: '350px',
              boxSizing: 'border-box',
              maxWidth: '550px',
              flexDirection: 'column',
            }}
          >
            <h3 style={{color: '#333333'}}>TOMATO SAUCE</h3>
            <p
              style={{
                color: '#333333',
                fontSize: '20px',
              }}
            >
              Freshly prepared tomato sauce, made daily with high-quality
              ingredients to ensure the perfect base for your favorite toppings!
              Our sauce is crafted using a traditional recipe, allowing it to
              develop a rich, tangy flavor. It's simmered to perfection,
              providing a smooth texture with a burst of authentic taste in
              every bite. Whether you prefer classic Margherita or loaded
              supreme, our tomato sauce is the ideal complement for your pizza
              creations!
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexBasis: '48%', // Allowing each column to take up to 45% of the container width
              flexGrow: 1,
              minWidth: '350px', // Ensures columns don't get too narrow
              boxSizing: 'border-box', // Ensures padding is included in the width calculation
            }}
          >
            <img
              src="/assets/ingredients-tomato.jpg"
              alt="Pizza Dough 1"
              style={{
                width: '100%',
                maxWidth: '550px',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundColor: '#9c2029',
          minHeight: '70vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          className="flex-container"
          style={{
            width: '90%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '7rem', // Ensures spacing between columns
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexBasis: '48%', // Allowing each column to take up to 45% of the container width
              flexGrow: 1,
              minWidth: '350px', // Ensures columns don't get too narrow
              boxSizing: 'border-box', // Ensures padding is included in the width calculation
            }}
          >
            <img
              src="/assets/ingredients-mozzarella.jpg"
              alt="Pizza Dough 1"
              style={{
                width: '100%',
                maxWidth: '550px',
                objectFit: 'contain',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'left',
              flexBasis: '48%', // Same as the other column
              flexGrow: 1,
              minWidth: '350px',
              boxSizing: 'border-box',

              maxWidth: '550px',
              flexDirection: 'column',
            }}
          >
            <h3 style={{color: 'white'}}>MOZZARELLA</h3>
            <p
              style={{
                color: 'white',
                fontSize: '20px',
              }}
            >
              Freshly sourced mozzarella, made daily with high-quality milk to
              ensure the perfect topping for your favorite pizzas! Our
              mozzarella is crafted using a traditional method, allowing it to
              develop a rich, creamy flavor and a perfect melt. It's shredded
              and prepped to perfection, providing a stretchy, gooey texture in
              every bite. Whether you prefer classic Margherita or loaded
              supreme, our mozzarella is the ideal finishing touch for your
              pizza creations!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
