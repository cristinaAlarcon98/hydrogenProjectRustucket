import Button from '@mui/material/Button';
import {useLocation, useNavigate} from '@remix-run/react';
import {RecommendedProducts} from './_index';

export default function OrdersPage() {
  const location = useLocation();
  const data = location.state?.products || [];
  const navigate = useNavigate();
  const handleSubscriptionClick = (subscriptionType) => {
    return navigate(`/${subscriptionType}`);
  };
  return (
    <section
      style={{
        maxHeight: '90%',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#008557',
      }}
    >
      {/* Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          color: '#fff',
          height: '100%',
        }}
      >
        <div
          style={{
            maxWidth: '600px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h3 style={{color: 'white', textAlign: 'center'}}>
            OUR SUBSCRIPTIONS
          </h3>
          <p
            style={{
              color: 'white',
              fontSize: '20px',
              textAlign: 'center',
            }}
          >
            The place to unite pizza people, nationwide. Get great pizza at home
            with our DIY kits AND great pizza in our pizzerias. Check out our
            different memberships for the pizza lovin’ community.
          </p>
        </div>
        {/* <div
            style={{display: 'flex', flexDirection: 'row', gap: 20, margin: 20}}
          >
            <Button
              onClick={() => handleSubscriptionClick('dough_subscription')}
            >
              JOIN DOUGHT SUBSCRIPTION
            </Button>

            <Button onClick={() => handleSubscriptionClick('margarita')}>
              JOIN MARGARITHA SUBSCRIPTION
            </Button>

            <Button onClick={() => handleSubscriptionClick('expert')}>
              JOIN PIZZA MASTER SUBSCRIPTION
            </Button>
          </div> */}
        <RecommendedProducts products={data.recommendedProducts} />
      </div>
    </section>
  );
}
