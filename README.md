# sensors_data_view
This is a final project at the end of the 'Back-End Developer: Python' course at Coders Lab.

### Projekt jest ciągle rozwijany

Projekt sensors-data-view jest aplikacją webową przeznaczoną do zarządzania czujnikami podłączonymi do Raspberry pi oraz do wizualizacji tychże danych.

Czujniki, z których zbierane są dane to np.: czujnik ciśnienia atmosferycznego, czujnik oświetlania, akcelerometr, magnetometr, wilgotnościomierz, termometr cyfrowy, przetwornik analogowo-cyfrowy i cyfrowo-analogowy, czujnik jakości powietrza itp. Komunikacja odbywa się za pomocą magistral I2C, 1-wire oraz bezpośrednio ze złącza GPIO – zapisywanie danych do bazy danych odbywa się za pomocą skryptu w Python 3.5 i jest niezależna od aplikacji webowej.

Sensors-data-view umożliwia zarejestrowanym i zalogowanym użytkownika na przeglądanie danych z czujników, jak i listy czujników, administrator dodatkowo może edytować wpisy dotyczące czujników.

Back-End oparty jest na frameworku Django oraz bazę MySQL (znajdująca się nadysku sieciowym). Część Front-End napisana jest z użyciem HTML, CSS i JavaScript.
