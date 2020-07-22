

``mx.symbol.amp_cast``
============================================

Description
----------------------

Cast function between low precision float/FP32 used by AMP.

It casts only between low precision float/FP32 and does not do anything for other types.


Usage
----------

.. code:: r

	mx.symbol.amp_cast(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input.                                                 |
+----------------------------------------+------------------------------------------------------------+
| ``dtype``                              | {'float16', 'float32', 'float64', 'int32', 'int64',        |
|                                        | 'int8', 'uint8'},                                          |
|                                        | required.                                                  |
|                                        |                                                            |
|                                        | Output data type.                                          |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/amp_cast.cc#L37

