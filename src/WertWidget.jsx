
import { useWertWidget } from '@wert-io/module-react-component';
import { useState } from 'react';


export default function WertWidgetButton () {
    const options= {
        partner_id: "01HYE4RF49SGFWKBFDK10EYWFY",
    origin: "https://sandbox.wert.io",
    address: "0x0E976df9bb3ac63F7802ca843C9d121aE2Ef22ee",
    commodity: "MATIC",
    commodity_amount: 3,
    network: "amoy",
    sc_address: "0x6af35a72b2490a44c0e88ae635b9b38516544db1",
    sc_input_data: "0x3c168eab0000000000000000000000000e976df9bb3ac63f7802ca843c9d121ae2ef22ee0000000000000000000000000000000000000000000000000000000000000001"
    };
    const [reactiveOptions, setReactiveOptions] = useState({
        theme: 'dark',
        listeners: {
            'loaded': () => console.log(loaded),
        },
    });

    const { open: openWertWidget, isWidgetOpen } = useWertWidget(reactiveOptions);

    return <button
        onClick={() => {
            openWertWidget({ options });
            console.log(isWidgetOpen);
        }}
    >
        Make A Purchase
    </button>
}