import React, { useState } from 'react';
import { StyleSheet, View, ImageBackgroundBase, Text, TouchableOpacity, ImageBackground } from 'react-native';

const CalculatorApp = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const handleNumberPress = (num) => {
    if (waitingForOperand) {
      setDisplayValue(String(num));
      setWaitingForOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? String(num) : displayValue + num);
    }
  };

  const handleOperatorPress = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (firstValue === null) {
      setFirstValue(inputValue);
    } else if (operator) {
      const currentValue = firstValue || 0;
      const newValue = operate(operator, currentValue, inputValue);

      setDisplayValue(String(newValue));
      setFirstValue(newValue);
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const handleEqualsPress = () => {
    if (!operator) return;

    const inputValue = parseFloat(displayValue);
    const newValue = operate(operator, firstValue, inputValue);

    setDisplayValue(String(newValue));
    setFirstValue(null);
    setWaitingForOperand(true);
    setOperator(null);
  };

  const handleClearPress = () => {
    setDisplayValue('0');
    setFirstValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const operate = (operator, a, b) => {
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '×':
        return a * b;
      case '÷':
        return a / b;
      default:
        return b;
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ height: "30%",width:"100%",marginTop:500,alignItems:'flex-end',justifyContent:'flex-end'}}>
        <Text style={{fontSize:40,marginRight:20,marginBottom:20}}>{displayValue}</Text>
      </View>
      <View style={{ height: "100%", backgroundColor: '#F3F3F3', flexDirection: 'row',justifyContent:'space-between',margin:10}}>
        <View style={{ width: '75%', backgroundColor: '#F3F3F3', height: "100%", gap: 50,marginLeft:10 }}>
          <View style={{ width: "100%", height: '8%', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', borderRadius: 40, alignItems: 'center' }}>
            <TouchableOpacity style={{ marginLeft: 20 }} onPress={handleClearPress}>
              <Text style={{ fontSize: 30 }}>AC</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 30 }}>+/-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginRight: 20 }}>
              <Text style={{ fontSize: 30 }}>%</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
            <View style={{ width: "25%", height: '200%', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', borderRadius: 40, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => handleNumberPress(7)}>
                <Text style={{ fontSize: 30 }}>7</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: "25%", height: '200%', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', borderRadius: 40, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => handleNumberPress(8)}>
                <Text style={{ fontSize: 30 }}>8</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: "25%", height: '200%', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', borderRadius: 40, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => handleNumberPress(9)}>
                <Text style={{ fontSize: 30 }}>9</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row' ,justifyContent:'space-between' }}>
            <View style={{ width: "25%", height: '200%', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', borderRadius: 40, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => handleNumberPress(4)}>
                <Text style={{ fontSize: 30 }}>4</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: "25%", height: '200%', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', borderRadius: 40, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => handleNumberPress(5)}>
                <Text style={{ fontSize: 30 }}>5</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: "25%", height: '200%', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', borderRadius: 40, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => handleNumberPress(6)}>
                <Text style={{ fontSize: 30 }}>6</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row' ,justifyContent:'space-between' }}>
            <View style={{ width: "25%", height: '200%', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', borderRadius: 40, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => handleNumberPress(1)}>
                <Text style={{ fontSize: 30 }}>1</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: "25%", height: '200%', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', borderRadius: 40, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => handleNumberPress(2)}>
                <Text style={{ fontSize: 30 }}>2</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: "25%", height: '200%', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', borderRadius: 40, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => handleNumberPress(3)}>
                <Text style={{ fontSize: 30 }}>3</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
            <View style={{ width: "25%", height: '200%', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', borderRadius: 40, alignItems: 'center' }}>
              <TouchableOpacity>
                <Text style={{ fontSize: 30 }}>.</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: "25%", height: '200%', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', borderRadius: 40, alignItems: 'center' }}>
              <TouchableOpacity>
                <Text style={{ fontSize: 30 }}>0</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: "25%", height: '200%', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', borderRadius: 40, alignItems: 'center' }}>
              <TouchableOpacity>
                <Text style={{ fontSize: 30 }}>00</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{width:"18%",height:'53%',backgroundColor:'white',borderRadius:40,alignItems:'center',justifyContent:'center',gap:20}}>
          <TouchableOpacity style={{height:"17%",marginTop:45}} onPress={() => handleOperatorPress("/")}>
            <Text style={{fontSize:25}}>/</Text>
          </TouchableOpacity >
          <TouchableOpacity style={{height:"17%"}} onPress={() => handleOperatorPress("-")}>
          <Text style={{fontSize:25}}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{height:"17%"}} onPress={() => handleOperatorPress("+")}>
          <Text style={{fontSize:25}}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{height:"17%"}} onPress={() => handleOperatorPress("*")}>
          <Text style={{fontSize:25}}>x</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{height:"17%"}} onPress={handleEqualsPress}>
          <Text style={{fontSize:25}}>=</Text>
          </TouchableOpacity>
        </View>
      </View >
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    backgroundColor: '#F3F3F3'
  },
  display: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  displayText: {
    fontSize: 48,
  },
  buttonRow: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
  },
});

export default CalculatorApp;
