/* threshold to keep the noise down */
const int TOLERANCE  = 5;
/* Pin definitions */
int horizontalPot = A0;    
int verticalPot   = A1;
/* Global values for the pot's values */
int horizontalVal = 0;    
int verticalVal   = 0;    

void setup() {
  Serial.begin(9600);
}

void loop() {

  int valX = analogRead( horizontalPot );    // read the value from the sensor 0
  int valY = analogRead( verticalPot );    // read the value from the sensor 1

  bool changed_or_new_X = abs ( valX - horizontalVal ) >= TOLERANCE || ( valX == 0 && horizontalVal != 0 )  || ( valX == 1023 && horizontalVal != 1023 );
  bool changed_or_new_Y = abs ( valY - verticalVal   ) >= TOLERANCE || ( valY == 0 && verticalVal != 0 )    || ( valY == 1023 && verticalVal   != 1023 );

  if ( changed_or_new_X || changed_or_new_Y ) {
    
    int invertedX = abs( 1024 - valX );
    int invertedY = abs( 1024 - valY );
    
    Serial.print( invertedX );
    Serial.print( "," );
    Serial.println( invertedY );
    horizontalVal = valX;
    verticalVal = valY;
  }

  delay(3);
}



