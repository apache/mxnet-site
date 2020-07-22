

``mx.symbol.multi_sum_sq``
====================================================

Description
----------------------

Compute the sums of squares of multiple arrays.  


Usage
----------

.. code:: r

	mx.symbol.multi_sum_sq(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol[].                                       |
|                                        |                                                            |
|                                        | Arrays                                                     |
+----------------------------------------+------------------------------------------------------------+
| ``num.arrays``                         | int, required.                                             |
|                                        |                                                            |
|                                        | number of input arrays.                                    |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/contrib/multi_sum_sq.cc#L36

