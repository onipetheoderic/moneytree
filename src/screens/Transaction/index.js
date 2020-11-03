import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, Share, Text, View, Image, TouchableOpacity, 
    Dimensions, ScrollView, ImageBackground, TouchableHighlight, Platform, Alert } from 'react-native';

import WalletHeader from '../../components/Headers/WalletHeader';
import PaginatedTable from '../../components/Table/PaginatedTable';

export default function Transaction(props) {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('TransactionFilter')
        }, 3000);
    }, []);

    let sampleData = [
        {"transaction ID": "mtx wjfyukwpkvfos", amount:"1020", "Payment Gateway": "20-03-2020" },
        {"transaction ID": "mtx wjfyukwpkvfos", amount:"1020", "Payment Gateway": "20-03-2020" },
        {"transaction ID": "mtx wjfyukwpkvfos", amount:"1020", "Payment Gateway": "20-03-2020" },
        {"transaction ID": "mtx wjfyukwpkvfos", amount:"1020", "Payment Gateway": "20-03-2020" },
        {"transaction ID": "mtx wjfyukwpkvfos", amount:"1020", "Payment Gateway": "20-03-2020" },
        {"transaction ID": "mtx wjfyukwpkvfos", amount:"1020", "Payment Gateway": "20-03-2020" },
        {"transaction ID": "mtx wjfyukwpkvfos", amount:"1020", "Payment Gateway": "20-03-2020" },
        {"transaction ID": "mtx wjfyukwpkvfos", amount:"1020", "Payment Gateway": "20-03-2020" },
        {"transaction ID": "mtx wjfyukwpkvfos", amount:"1020", "Payment Gateway": "20-03-2020" },
        {"transaction ID": "mtx wjfyukwpkvfos", amount:"1020", "Payment Gateway": "20-03-2020" },
        {"transaction ID": "mtx wjfyukwpkvfos", amount:"1020", "Payment Gateway": "20-03-2020" },
        {"transaction ID": "mtx wjfyukwpkvfos", amount:"1020", "Payment Gateway": "20-03-2020" },
        {"transaction ID": "mtx wjfyukwpkvfos", amount:"1020", "Payment Gateway": "20-03-2020" },
        {"transaction ID": "mtx wjfyukwpkvfos", amount:"1020", "Payment Gateway": "20-03-2020" },
        {"transaction ID": "mtx wjfyukwpkvfos", amount:"1020", "Payment Gateway": "20-03-2020" },
        {"transaction ID": "mtx wjfyukwpkvfos", amount:"1020", "Payment Gateway": "20-03-2020" },
        {"transaction ID": "mtx wjfyukwpkvfos", amount:"1020", "Payment Gateway": "20-03-2020" },
        {"transaction ID": "mtx wjfyukwpkvfos", amount:"1020", "Payment Gateway": "20-03-2020" }
    ]
    return (
        <View>
            <WalletHeader title="My Transactions" navigation={props.navigation} hideFilterBtn={false}/>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <PaginatedTable title="List of mtx wjfyukwpkvfoss"  data={sampleData}/>
            </ScrollView>
            
        </View>
    )
}
 