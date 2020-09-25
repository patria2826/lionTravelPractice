import 'package:flutter/material.dart';

class RateBlock extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Expanded(flex: 2, child: Container()),
        Expanded(
            flex: 5,
            child: Container(
              padding: EdgeInsets.all(40),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius:
                    BorderRadius.vertical(
                  top: Radius.circular(60),
                ),
              ),
              child: Column(children: [
                Expanded(
                    flex: 8,
                    child: Column(
                      children: [
                        Row(
                            mainAxisAlignment:
                                MainAxisAlignment
                                    .spaceBetween,
                            children: [
                              Text(
                                'GranBlue Fantasy',
                                style: TextStyle(
                                    fontSize: 24,
                                    fontWeight:
                                        FontWeight
                                            .w500),
                              ),
                              Text(
                                '\$ 250,000',
                                style: TextStyle(
                                    fontSize: 24,
                                    fontWeight:
                                        FontWeight
                                            .w500,
                                    color: Colors
                                            .blueGrey[
                                        600]),
                              ),
                            ]),
                        Row(
                          children: [
                            Icon(
                              Icons.location_on,
                              size: 20,
                              color: Colors
                                      .deepPurple[
                                  400],
                            ),
                            Text(
                              '  Japan, Tokyo',
                              style: TextStyle(
                                color: Colors
                                        .deepPurple[
                                    400],
                              ),
                            )
                          ],
                        ),
                        Padding(
                            padding: EdgeInsets
                                .symmetric(
                                    vertical: 5),
                            child: Row(
                              children: [
                                Icon(Icons.star,
                                    color: Colors
                                            .yellow[
                                        800]),
                                Icon(Icons.star,
                                    color: Colors
                                            .yellow[
                                        800]),
                                Icon(Icons.star,
                                    color: Colors
                                            .yellow[
                                        800]),
                                Icon(Icons.star,
                                    color: Colors
                                            .yellow[
                                        800]),
                                Icon(Icons
                                    .star_border)
                              ],
                            )),
                        Container(
                          margin: EdgeInsets.only(
                              top: 20),
                          child: Column(
                            crossAxisAlignment:
                                CrossAxisAlignment
                                    .stretch,
                            children: [
                              Text(
                                'Place',
                                style: TextStyle(
                                    fontSize: 18,
                                    fontWeight:
                                        FontWeight
                                            .w500),
                              ),
                              Text(
                                'Do you want to build a snowman?',
                                style: TextStyle(
                                    fontSize: 14,
                                    color: Colors
                                            .grey[
                                        400]),
                              ),
                              Row(
                                mainAxisAlignment:
                                    MainAxisAlignment
                                        .spaceEvenly,
                                children: [
                                  Container(
                                    margin: EdgeInsets
                                        .only(
                                            top:
                                                20),
                                    padding: EdgeInsets.symmetric(
                                        vertical:
                                            15,
                                        horizontal:
                                            20),
                                    decoration: BoxDecoration(
                                        color: Colors
                                            .black,
                                        borderRadius:
                                            BorderRadius.circular(
                                                15)),
                                    child: Text(
                                      '1',
                                      style: TextStyle(
                                          color: Colors
                                              .white),
                                    ),
                                  ),
                                  Container(
                                    margin: EdgeInsets
                                        .only(
                                            top:
                                                20),
                                    padding: EdgeInsets.symmetric(
                                        vertical:
                                            15,
                                        horizontal:
                                            20),
                                    decoration: BoxDecoration(
                                        color: Colors
                                                .grey[
                                            300],
                                        borderRadius:
                                            BorderRadius.circular(
                                                15)),
                                    child: Text(
                                      '2',
                                    ),
                                  ),
                                  Container(
                                    margin: EdgeInsets
                                        .only(
                                            top:
                                                20),
                                    padding: EdgeInsets.symmetric(
                                        vertical:
                                            15,
                                        horizontal:
                                            20),
                                    decoration: BoxDecoration(
                                        color: Colors
                                                .grey[
                                            300],
                                        borderRadius:
                                            BorderRadius.circular(
                                                15)),
                                    child: Text(
                                      '3',
                                    ),
                                  ),
                                  Container(
                                    margin: EdgeInsets
                                        .only(
                                            top:
                                                20),
                                    padding: EdgeInsets.symmetric(
                                        vertical:
                                            15,
                                        horizontal:
                                            20),
                                    decoration: BoxDecoration(
                                        color: Colors
                                                .grey[
                                            300],
                                        borderRadius:
                                            BorderRadius.circular(
                                                15)),
                                    child: Text(
                                      '4',
                                    ),
                                  ),
                                  Container(
                                    margin: EdgeInsets
                                        .only(
                                            top:
                                                20),
                                    padding: EdgeInsets.symmetric(
                                        vertical:
                                            15,
                                        horizontal:
                                            20),
                                    decoration: BoxDecoration(
                                        color: Colors
                                                .grey[
                                            300],
                                        borderRadius:
                                            BorderRadius.circular(
                                                15)),
                                    child: Text(
                                      '5',
                                    ),
                                  )
                                ],
                              )
                            ],
                          ),
                        ),
                        Padding(
                            padding:
                                EdgeInsets.only(
                                    top: 30),
                            child: Column(
                                crossAxisAlignment:
                                    CrossAxisAlignment
                                        .stretch,
                                children: [
                                  Text(
                                    'Description',
                                    style: TextStyle(
                                        fontSize:
                                            18,
                                        fontWeight:
                                            FontWeight
                                                .w500),
                                  ),
                                  Text(
                                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                                    style: TextStyle(
                                        fontSize:
                                            14,
                                        color: Colors
                                                .grey[
                                            400],
                                        height:
                                            1.4),
                                  ),
                                ]))
                      ],
                    )),
                Expanded(
                    child: Row(
                  mainAxisAlignment:
                      MainAxisAlignment
                          .spaceBetween,
                  children: [
                    Container(
                      padding:
                          EdgeInsets.fromLTRB(
                              15, 15, 15, 25),
                      child: Icon(
                        Icons.favorite_border,
                        color: Colors
                            .deepPurple[500],
                        size: 18,
                      ),
                      decoration: BoxDecoration(
                          border: Border.all(
                              color: Colors
                                      .deepPurple[
                                  500],
                              width: 1),
                          borderRadius:
                              BorderRadius
                                  .circular(10)),
                    ),
                    Container(
                      height: 45,
                      width: 270,
                      padding:
                          EdgeInsets.symmetric(
                        horizontal: 20,
                      ),
                      decoration: BoxDecoration(
                          color: Colors
                              .deepPurple[400],
                          borderRadius:
                              BorderRadius
                                  .circular(10)),
                      child: Center(
                        child: Text(
                          'Buy now~',
                          style: TextStyle(
                            color: Colors.white,
                          ),
                        ),
                      ),
                    )
                  ],
                ))
              ]),
            )),
      ],
    );
  }
}
