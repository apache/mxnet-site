

``mx.symbol.reset_arrays``
====================================================

Description
----------------------

Set to zero multiple arrays.  


Usage
----------

.. code:: r

	mx.symbol.reset_arrays(...)

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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/contrib/reset_arrays.cc#L36

