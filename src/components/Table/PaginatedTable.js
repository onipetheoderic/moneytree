import React, {useState} from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import styles from './overlappingtable.component.styles'
import PropTypes from 'prop-types';
//MaterialIcons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useStateWithCallbackLazy } from 'use-state-with-callback';
import { palete } from '../../theme/theme';

export default function OverlappingTable({title, imageLogo, data}) {
    const [currentLimit, changeLimit] = useStateWithCallbackLazy(0)
    const [count, setCount] = useStateWithCallbackLazy(1);

    const INCREMENT = 10
    let limitedData = data.slice(currentLimit, currentLimit+INCREMENT);

    const tableHeaders = () => {
        let sampleData = data[0];
        let finalHeader = ["No."].concat(Object.keys(sampleData))
        return finalHeader
    }
    const capitalizer = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1)
    };

    const tableColorizer = (index) => {
        if(index%2===1){
            return "#F0F0F0"
        }
        else return "white"
    }

    const dataDisplay = (datum, data, index) => {
        
        let headers = Object.keys(data[0])
        return (
            <View style={[styles.dataRowCont,{backgroundColor:tableColorizer(index)}]}>
               <Text style={styles.dataText}>{index+1}</Text>
                {headers.map((data)=>(
                    <Text style={styles.dataText}>{datum[data]}</Text>
                ))}
            </View>
        )
    }

    const move = () => {
        changeLimit(currentLimit+INCREMENT, (currentCount) => {
            if (limitedData.length<INCREMENT) {
                changeLimit(INCREMENT)
                setCount(Math.ceil(currentCount/INCREMENT))
            } else {
                console.log('No threshold reached.', currentCount);
                setCount(Math.ceil(currentCount/INCREMENT))
            }
        })
    }

    const decrement = () => {
        changeLimit(currentLimit-INCREMENT, (currentCount) => {
            if (currentCount < 0) {
                console.log('Now Minusssss.', currentCount);
                setCount(Math.ceil(currentCount/INCREMENT))
                changeLimit(0)
            } else {
                console.log('Positive', currentCount);
                setCount(Math.ceil(currentCount/INCREMENT))
            }
        })
    }
console.log("the count", count)
    const paginatorMaker = () => {
        let totalData = Math.ceil(data.length/INCREMENT);
        console.log("the totalData", totalData)
        return (
            [...Array(totalData)].map((e, i) => 
            <View style={[styles.eachPage,{backgroundColor:count==i ? palete.BritishRacingGreen : '#fafafa', }]}>
                <Text style={[styles.eachText,{color: count==i ? 'white' : 'black'}]}>{i+1}</Text>
            </View>
        )
        )
    }
   
    return (
        <View>
        <View style={styles.container}>
          
            <View style={styles.rowCont}>
                {tableHeaders().map((header, index) => (
                    <Text key={index} style={styles.eachRowText}>{capitalizer(header)}</Text>
                ))}
            </View>
            {limitedData.map((datum, index) => (
                dataDisplay(datum, data, index)
            ))}
           
           
        </View>
        <View style={styles.paginationCont}>
            <TouchableOpacity onPress={()=>decrement()}>
            <MaterialIcons name="keyboard-arrow-left" size={20} style={styles.iconStyle2} />
           </TouchableOpacity>
          {paginatorMaker()}
          
            <TouchableOpacity onPress={()=>move()}>
            <MaterialIcons name="keyboard-arrow-right" size={20} style={styles.iconStyle} />
            </TouchableOpacity>
           
        </View>
       
        </View>
    )
}

OverlappingTable.propTypes = {
    title: PropTypes.string.isRequired,
   data: PropTypes.array.isRequired,
}
