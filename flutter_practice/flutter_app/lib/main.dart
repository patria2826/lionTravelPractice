// Copyright 2018 The Flutter team. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(
      home: Home(),
    ));

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('My First App'),
        centerTitle: true,
        backgroundColor: Colors.deepPurple[400],
      ),
      body: Center(
          child: ListView(
        padding:
            EdgeInsets.fromLTRB(5, 15, 5, 25),
        children: [
          Row(
            children: [
              Expanded(
                  flex: 3,
                  child: Image.asset(
                      'assets/test.jpg')),
              Expanded(
                  flex: 1,
                  child: Container(
                    padding: EdgeInsets.all(30),
                    color: Colors.purple[100],
                    child: Text('1'),
                  )),
              Expanded(
                  flex: 2,
                  child: Container(
                      padding: EdgeInsets.all(30),
                      color: Colors.purple[500],
                      child: Text(
                        '2',
                        style: TextStyle(
                            color: Colors.white),
                      ))),
              Expanded(
                  flex: 3,
                  child: Container(
                      padding: EdgeInsets.all(30),
                      color: Colors.purple[900],
                      child: Text(
                        '3',
                        style: TextStyle(
                            color: Colors.white),
                      ))),
            ],
          ),
          IconButton(
            padding: EdgeInsets.all(
                0), //把icon推到button中間
            onPressed: () {
              print('object clicked!');
            },
            icon: Icon(
              Icons.android,
              color: Colors.purple[500],
              size: 50,
            ),
          ),
          RaisedButton.icon(
            onPressed: () {},
            icon: Icon(
              Icons.android,
              color: Colors.white,
            ),
            label: Text(
              'Android',
              style:
                  TextStyle(color: Colors.white),
            ),
            color: Colors.deepPurple[300],
          ),
          FlatButton(
            onPressed: () {
              print('clicked~~');
            },
            color: Colors.deepPurple[300],
            child: Text('Button'),
          ),
          Container(
              padding: EdgeInsets.all(5),
              margin: EdgeInsets.fromLTRB(
                  20, 10, 20, 20),
              decoration: BoxDecoration(
                  border: Border.all(
                      color: Colors.purple[500],
                      width: 5)),
              width: 5,
              child: Row(
                mainAxisAlignment:
                    MainAxisAlignment.center,
                crossAxisAlignment:
                    CrossAxisAlignment.start,
                children: <Widget>[
                  Column(
                    children: [
                      Icon(
                        Icons.android,
                        color: Colors
                            .deepPurple[200],
                        size: 15,
                      ),
                      Icon(
                        Icons.android,
                        color: Colors
                            .deepPurple[200],
                        size: 20,
                      ),
                      Icon(
                        Icons.android,
                        color: Colors
                            .deepPurple[200],
                        size: 25,
                      ),
                      Icon(
                        Icons.android,
                        color: Colors
                            .deepPurple[200],
                        size: 30,
                      ),
                      Icon(
                        Icons.android,
                        color: Colors
                            .deepPurple[200],
                        size: 35,
                      ),
                      Icon(
                        Icons.android,
                        color: Colors
                            .deepPurple[200],
                        size: 40,
                      ),
                      Icon(
                        Icons.android,
                        color: Colors
                            .deepPurple[200],
                        size: 45,
                      ),
                    ],
                  ),
                  Icon(
                    Icons.android,
                    color: Colors.deepPurple[200],
                    size: 20,
                  ),
                  Icon(
                    Icons.android,
                    color: Colors.deepPurple[200],
                    size: 25,
                  ),
                  Icon(
                    Icons.android,
                    color: Colors.deepPurple[200],
                    size: 30,
                  ),
                  Icon(
                    Icons.android,
                    color: Colors.deepPurple[200],
                    size: 35,
                  ),
                  Icon(
                    Icons.android,
                    color: Colors.deepPurple[200],
                    size: 40,
                  ),
                  Icon(
                    Icons.android,
                    color: Colors.deepPurple[200],
                    size: 45,
                  ),
                ],
              )),
          Container(
            child: Image.asset('assets/test.jpg'),
            padding: EdgeInsets.all(50),
            decoration: BoxDecoration(
                gradient: LinearGradient(
                    begin: Alignment.topRight,
                    end: Alignment.bottomLeft,
                    colors: [
                  Colors.purple[300],
                  Colors.red[100]
                ])),
          ),
          Padding(
            padding: EdgeInsets.symmetric(
                horizontal: 20, vertical: 30),
            child: Text(
              'Padding',
              textScaleFactor: 2,
              style: TextStyle(
                  decoration:
                      TextDecoration.underline),
            ),
          ),
          Image.asset('assets/test.jpg'),
          Text(
            'hello guys~',
            style: TextStyle(
                letterSpacing: 2.0,
                fontSize: 25.0,
                fontWeight: FontWeight.bold,
                color: Colors.deepPurple[800],
                fontFamily: 'Chilanka'),
          )
        ],
      )),
      floatingActionButton: FloatingActionButton(
        child: Text('click'),
        onPressed: () {},
        backgroundColor: Colors.deepPurple[700],
      ),
    );
  }
}
