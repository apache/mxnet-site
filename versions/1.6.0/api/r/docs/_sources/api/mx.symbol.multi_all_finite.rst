

``mx.symbol.multi_all_finite``
============================================================

Description
----------------------

Check if all the float numbers in all the arrays are finite (used for AMP).  


Usage
----------

.. code:: r

	mx.symbol.multi_all_finite(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol[].                                       |
|                                        |                                                            |
|                                        | Arrays                                                     |
+----------------------------------------+------------------------------------------------------------+
| ``num.arrays``                         | int, optional, default='1'.                                |
|                                        |                                                            |
|                                        | Number of arrays.                                          |
+----------------------------------------+------------------------------------------------------------+
| ``init.output``                        | boolean, optional, default=1.                              |
|                                        |                                                            |
|                                        | Initialize output to 1.                                    |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/contrib/all_finite.cc#L133

