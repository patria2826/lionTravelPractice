import 'package:flutter/material.dart';
import 'detailPage.dart';

class DetailPageArguments {
  final String imageLocation;

  DetailPageArguments(this.imageLocation);
}

class PicSlider extends StatefulWidget {
  @override
  _ActiveTab createState() => _ActiveTab();
}

class _ActiveTab extends State<PicSlider> {
  List tabs = [
    'Places',
    'Inspirations',
    'Emotions'
  ];

  Map picsList = {
    'Places': [1, 2, 3],
    'Inspirations': [4, 5, 6],
    'Emotions': [7, 8, 9],
  };

  String activeTab = 'Places';

  @override
  Widget build(BuildContext context) {
    return Column(children: [
      Row(
        mainAxisAlignment:
            MainAxisAlignment.spaceEvenly,
        children: tabs.map((tabText) {
          bool isActive = activeTab == tabText;
          var tab = FlatButton(
            onPressed: () {
              setState(() {
                activeTab = tabText;
              });
            },
            padding: EdgeInsets.all(0),
            child: Text(
              tabText,
              style: TextStyle(
                  fontSize: 16,
                  color: isActive
                      ? Colors.black
                      : Colors.grey[500],
                  decoration: isActive
                      ? TextDecoration.underline
                      : TextDecoration.none),
            ),
          );

          return tab;
        }).toList(),
      ),
      Container(
        height: 300,
        child: ListView(
          scrollDirection: Axis.horizontal,
          children: (() {
            List<Widget> renderList = [];
            picsList.entries.forEach((element) {
              if (element.key == activeTab) {
                List currPics = element.value;
                currPics.forEach((e) {
                  renderList.add(GestureDetector(
                      onTap: () {
                        Navigator.pushNamed(
                            context,
                            DetailPage.routeName,
                            arguments:
                                DetailPageArguments(
                                    'assets/slide$e.jpg'));
                      },
                      child: Padding(
                        padding: EdgeInsets.only(
                            right: 10),
                        child: ClipRRect(
                          child: Image.asset(
                              'assets/slide$e.jpg'),
                          borderRadius:
                              BorderRadius
                                  .circular(10),
                        ),
                      )));
                });
              }
            });
            return renderList;
          })(),
        ),
      )
    ]);
  }
}
