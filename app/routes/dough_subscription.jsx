import {useState, useEffect, useCallback} from 'react';

export default function DoughtSubscriptionPage() {
  const [numDoughs, setNumDoughs] = useState(10);
  const [doughType, setDoughType] = useState('regular');
  const [deliveryFrequency, setDeliveryFrequency] = useState('Every 2 Weeks');
  const [price, setPrice] = useState(26);

  const handleSubscriptionClick = () => {
    alert(`Subscription Confirmed:
    - Number of Dough Kits: ${numDoughs}
    - Dough Type: ${doughType}
    - Delivery Frequency: ${deliveryFrequency}`);
  };

  const calculatePrice = useCallback(() => {
    let basePrice = doughType === 'gluten free' ? 30 : 26;
    if (numDoughs === 15) basePrice += 5;
    const frequencyMultiplier =
      deliveryFrequency === 'Once a Week'
        ? 1
        : deliveryFrequency === 'Every 4 Weeks'
        ? 1.5
        : 1.7;
    setPrice(basePrice * frequencyMultiplier);
  }, [numDoughs, doughType, deliveryFrequency]);

  useEffect(() => {
    calculatePrice();
  }, [calculatePrice]);

  return (
    <div
      style={{
        backgroundColor: '#f8f9fa',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        padding: '20px',
      }}
    >
      <h1 style={{marginBottom: '20px', fontSize: '28px', fontWeight: 'bold'}}>
        Dough Subscription
      </h1>

      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          padding: '20px',
          maxWidth: '400px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {/* Number of Dough Kits */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <h3 style={{fontSize: '18px'}}>Number of Dough Kits</h3>
          <div style={{display: 'flex', gap: '10px'}}>
            {[10, 15].map((value) => (
              <button
                key={value}
                onClick={() => setNumDoughs(value)}
                style={{
                  padding: '10px 15px',
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                  backgroundColor: numDoughs === value ? '#007BFF' : '#fff',
                  color: numDoughs === value ? '#fff' : '#000',
                  cursor: 'pointer',
                }}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        {/* Dough Type */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <h3 style={{fontSize: '18px'}}>Dough Type</h3>
          <div style={{display: 'flex', gap: '10px'}}>
            {['regular', 'gluten free'].map((type) => (
              <button
                key={type}
                onClick={() => setDoughType(type)}
                style={{
                  padding: '10px 15px',
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                  backgroundColor: doughType === type ? '#007BFF' : '#fff',
                  color: doughType === type ? '#fff' : '#000',
                  cursor: 'pointer',
                }}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Delivery Frequency */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <h3 style={{fontSize: '18px'}}>Delivery Frequency</h3>
          <div style={{display: 'flex', gap: '10px'}}>
            {['Every 2 Weeks', 'Once a Week', 'Every 4 Weeks'].map(
              (frequency) => (
                <button
                  key={frequency}
                  onClick={() => setDeliveryFrequency(frequency)}
                  style={{
                    padding: '10px 15px',
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    backgroundColor:
                      deliveryFrequency === frequency ? '#007BFF' : '#fff',
                    color: deliveryFrequency === frequency ? '#fff' : '#000',
                    cursor: 'pointer',
                  }}
                >
                  {frequency}
                </button>
              ),
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubscriptionClick}
          style={{
            padding: '15px',
            borderRadius: '8px',
            backgroundColor: '#007BFF',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '16px',
            border: 'none',
            cursor: 'pointer',
            marginTop: '10px',
          }}
        >
          Confirm Subscription
        </button>
      </div>
      <h1> {price}</h1>
    </div>
  );
}
