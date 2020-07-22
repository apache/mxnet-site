

``mx.symbol.log_softmax``
==================================================

Description
----------------------

Computes the log softmax of the input.
This is equivalent to computing softmax followed by log.


**Example**::

	 
	 >>> x = mx.nd.array([1, 2, .1])
	 >>> mx.nd.log_softmax(x).asnumpy()
	 array([-1.41702998, -0.41702995, -2.31702995], dtype=float32)
	 
	 >>> x = mx.nd.array( [[1, 2, .1],[.1, 2, 1]] )
	 >>> mx.nd.log_softmax(x, axis=0).asnumpy()
	 array([[-0.34115392, -0.69314718, -1.24115396],
	 [-1.24115396, -0.69314718, -0.34115392]], dtype=float32)
	 
Usage
----------

.. code:: r

	mx.symbol.log_softmax(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input array.                                           |
+----------------------------------------+------------------------------------------------------------+
| ``axis``                               | int, optional, default='-1'.                               |
|                                        |                                                            |
|                                        | The axis along which to compute softmax.                   |
+----------------------------------------+------------------------------------------------------------+
| ``temperature``                        | double or None, optional, default=None.                    |
|                                        |                                                            |
|                                        | Temperature parameter in softmax                           |
+----------------------------------------+------------------------------------------------------------+
| ``dtype``                              | {None, 'float16', 'float32', 'float64'},optional,          |
|                                        | default='None'.                                            |
|                                        |                                                            |
|                                        | DType of the output in case this can't be inferred.        |
|                                        | Defaults to the same as input's dtype if not defined       |
|                                        | (dtype=None).                                              |
+----------------------------------------+------------------------------------------------------------+
| ``use.length``                         | boolean or None, optional, default=0.                      |
|                                        |                                                            |
|                                        | Whether to use the length input as a mask over the data    |
|                                        | input.                                                     |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


