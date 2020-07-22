

``mx.symbol.nansum``
========================================

Description
----------------------

nansum:Computes the sum of array elements over given axes treating Not a Numbers (``NaN``) as zero.


Usage
----------

.. code:: r

	mx.symbol.nansum(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input                                                  |
+----------------------------------------+------------------------------------------------------------+
| ``axis``                               | Shape or None, optional, default=None.                     |
|                                        |                                                            |
|                                        | The axis or axes along which to perform the reduction.     |
|                                        |                                                            |
|                                        | The default, `axis=()`, will compute over all elements     |
|                                        | into                                                       |
|                                        | a                                                          |
|                                        | scalar array with shape `(1,)`.                            |
|                                        |                                                            |
|                                        | If `axis` is int, a reduction is performed on a particular |
|                                        | axis.                                                      |
|                                        |                                                            |
|                                        | If `axis` is a tuple of ints, a reduction is performed on  |
|                                        | all the                                                    |
|                                        | axes                                                       |
|                                        | specified in the tuple.                                    |
|                                        |                                                            |
|                                        | If `exclude` is true, reduction will be performed on the   |
|                                        | axes that                                                  |
|                                        | are                                                        |
|                                        | NOT in axis instead.                                       |
|                                        |                                                            |
|                                        | Negative values means indexing from right to left.         |
+----------------------------------------+------------------------------------------------------------+
| ``keepdims``                           | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | If this is set to `True`, the reduced axes are left in the |
|                                        | result as dimension with size                              |
|                                        | one.                                                       |
+----------------------------------------+------------------------------------------------------------+
| ``exclude``                            | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | Whether to perform reduction on axis that are NOT in axis  |
|                                        | instead.                                                   |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/broadcast_reduce_sum_value.cc#L102

