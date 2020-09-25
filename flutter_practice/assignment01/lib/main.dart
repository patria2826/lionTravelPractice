import 'package:flutter/material.dart';
import 'picSlider.dart';
import 'detailPage.dart';

void main() => runApp(MaterialApp(
      home: MyApp(),
      routes: {
        DetailPage.routeName: (context) =>
            DetailPage(),
      },
    ));

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'My App Titless',
          style:
              TextStyle(color: Colors.grey[500]),
        ),
        backgroundColor: Colors.white,
        shadowColor: Colors.transparent,
        elevation: 0.0,
        leading: Icon(
          Icons.menu,
          color: Colors.grey[500],
        ),
        actions: [
          Container(
              padding: EdgeInsets.all(5),
              margin: EdgeInsets.only(right: 20),
              child: ClipRRect(
                child: Image.asset(
                  'assets/avatar.png',
                ),
                borderRadius:
                    BorderRadius.circular(8.0),
              ))
        ],
      ),
      body: Center(
        child: Body(),
      ),
    );
  }
}

class Body extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        margin: EdgeInsets.only(top: 30),
        padding: EdgeInsets.only(left: 20),
        child: Column(
          children: [
            Expanded(
              flex: 9,
              child: Column(
                children: [
                  Row(
                    children: [
                      Text(
                        'Discover',
                        style: TextStyle(
                            fontSize: 40,
                            fontWeight:
                                FontWeight.w500),
                      )
                    ],
                  ),
                  Column(
                    children: [
                      PicSlider(),
                      Padding(
                          padding:
                              EdgeInsets.fromLTRB(
                                  0, 30, 10, 30),
                          child: Row(
                            mainAxisAlignment:
                                MainAxisAlignment
                                    .spaceBetween,
                            children: [
                              Text(
                                'Explore more',
                                style: TextStyle(
                                    fontSize: 18,
                                    fontWeight:
                                        FontWeight
                                            .w500),
                              ),
                              Text('See all')
                            ],
                          )),
                      Container(
                        height: 110,
                        child: ListView(
                          scrollDirection:
                              Axis.horizontal,
                          children: [
                            Container(
                              padding:
                                  EdgeInsets.only(
                                      right: 40),
                              child: Column(
                                children: [
                                  Container(
                                    height: 80,
                                    width: 80,
                                    decoration: BoxDecoration(
                                        color: Colors
                                                .lightGreen[
                                            100],
                                        borderRadius:
                                            BorderRadius.circular(
                                                30)),
                                    child:
                                        IconButton(
                                      onPressed:
                                          () {},
                                      padding:
                                          EdgeInsets
                                              .all(0),
                                      icon: Icon(
                                          Icons
                                              .help),
                                      iconSize:
                                          40,
                                      color: Colors
                                              .lightGreen[
                                          800],
                                    ),
                                  ),
                                  Text('001')
                                ],
                              ),
                            ),
                            Container(
                                padding: EdgeInsets
                                    .only(
                                        right:
                                            40),
                                child: Column(
                                  children: [
                                    Container(
                                      height: 80,
                                      width: 80,
                                      decoration: BoxDecoration(
                                          color: Colors.deepOrange[
                                              100],
                                          borderRadius:
                                              BorderRadius.circular(30)),
                                      child:
                                          IconButton(
                                        onPressed:
                                            () {},
                                        padding:
                                            EdgeInsets.all(
                                                0),
                                        icon: Icon(
                                            Icons
                                                .warning),
                                        iconSize:
                                            40,
                                        color: Colors
                                                .deepOrange[
                                            800],
                                      ),
                                    ),
                                    Text('002')
                                  ],
                                )),
                            Container(
                                padding: EdgeInsets
                                    .only(
                                        right:
                                            40),
                                child: Column(
                                  children: [
                                    Container(
                                      height: 80,
                                      width: 80,
                                      decoration: BoxDecoration(
                                          color: Colors.amber[
                                              100],
                                          borderRadius:
                                              BorderRadius.circular(30)),
                                      child:
                                          IconButton(
                                        onPressed:
                                            () {},
                                        padding:
                                            EdgeInsets.all(
                                                0),
                                        icon: Icon(
                                            Icons
                                                .keyboard),
                                        iconSize:
                                            40,
                                        color: Colors
                                                .amber[
                                            800],
                                      ),
                                    ),
                                    Text('003')
                                  ],
                                )),
                            Column(
                              children: [
                                Container(
                                  height: 80,
                                  width: 80,
                                  decoration: BoxDecoration(
                                      color: Colors
                                              .cyan[
                                          100],
                                      borderRadius:
                                          BorderRadius.circular(
                                              30)),
                                  child:
                                      IconButton(
                                    onPressed:
                                        () {},
                                    padding:
                                        EdgeInsets
                                            .all(
                                                0),
                                    icon: Icon(Icons
                                        .hotel),
                                    iconSize: 40,
                                    color: Colors
                                            .cyan[
                                        800],
                                  ),
                                ),
                                Text('004')
                              ],
                            ),
                          ],
                        ),
                      )
                    ],
                  )
                ],
              ),
            ),
            Expanded(
              flex: 1,
              child: Row(
                  mainAxisAlignment:
                      MainAxisAlignment
                          .spaceAround,
                  children: [
                    IconButton(
                      icon:
                          Icon(Icons.add_a_photo),
                      onPressed: () {},
                    ),
                    IconButton(
                      icon:
                          Icon(Icons.headset_mic),
                      disabledColor:
                          Colors.blueGrey[200],
                    ),
                    IconButton(
                      icon: Icon(Icons.satellite),
                      disabledColor:
                          Colors.blueGrey[200],
                    ),
                    IconButton(
                      icon: Icon(Icons.face),
                      disabledColor:
                          Colors.blueGrey[200],
                    ),
                  ]),
            )
          ],
        ));
  }
}
