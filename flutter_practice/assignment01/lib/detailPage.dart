import 'package:flutter/material.dart';
import 'rateBlock.dart';
import 'picSlider.dart';

class DetailPage extends StatelessWidget {
  static const routeName = '/DetailPage';

  @override
  Widget build(BuildContext context) {
    final DetailPageArguments args =
        ModalRoute.of(context).settings.arguments;

    return Stack(children: [
      Image.asset(
        args.imageLocation,
        height:
            MediaQuery.of(context).size.height,
        width: MediaQuery.of(context).size.width,
        fit: BoxFit.cover,
      ),
      Scaffold(
        backgroundColor: Colors.transparent,
        appBar: AppBar(
          title: Text('slide3'),
          backgroundColor: Colors.transparent,
          elevation: 0,
        ),
        body: RateBlock(),
      )
    ]);
  }
}
