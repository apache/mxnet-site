

``mx.nd.all.finite``
========================================

Description
----------------------

Check if all the float numbers in the array are finite (used for AMP).  



Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray.                                                   |
|                                        |                                                            |
|                                        | Array                                                      |
+----------------------------------------+------------------------------------------------------------+
| ``init.output``                        | boolean, optional, default=1.                              |
|                                        |                                                            |
|                                        | Initialize output to 1.                                    |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/contrib/all_finite.cc#L101

