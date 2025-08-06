# Number System Converter API

This is a simple API built with Node.js and Express to convert numbers between decimal, binary, hexadecimal, and octal formats.

## Installation

1.  Clone this repository:

    ```bash
    git clone https://github.com/lucasdeeiroz/decimal_to_binary_converter.git
    ```
2.  Navigate to the project directory;

3.  Initialize npm:

    ```bash
    npm init -y
    ```
4.  Install the required dependencies:

    ```bash
    npm install express
    ```

## Usage

1.  Run the server:

    ```bash
    node index.js
    ```

    The server will start running on `localhost:3000`.

## Endpoints

*   **Convert Decimal to Binary:**

    `GET /to-binary/:decimal`

    Example: `http://localhost:3000/to-binary/10`
*   **Convert Decimal to Hexadecimal:**

    `GET /to-hex/:decimal`

    Example: `http://localhost:3000/to-hex/255`
*   **Convert Decimal to Octal:**

    `GET /to-octal/:decimal`

    Example: `http://localhost:3000/to-octal/8`
*   **Convert Binary to Decimal:**

    `GET /from-binary/:binary`

    Example: `http://localhost:3000/from-binary/1010`

## Examples

*   Converting 10 (decimal) to binary:

    `http://localhost:3000/to-binary/10` returns:

    ```json
    {
    "decimal": 10,
    "binary": "1010"
    }
    ```

*   Converting 255 (decimal) to hexadecimal:

    `http://localhost:3000/to-hex/255` returns:

    ```json
    {
    "decimal": 255,
    "hex": "FF"
    }
    ```

*   Converting 8 (decimal) to octal:

    `http://localhost:3000/to-octal/8` returns:

    ```json
    {
    "decimal": 8,
    "octal": "10"
    }
    ```

*   Converting 1010 (binary) to decimal:

    `http://localhost:3000/from-binary/1010` returns:

    ```json
    {
    "binary": "1010",
    "decimal": 10
    }
    ```
