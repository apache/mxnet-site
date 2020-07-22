

``mx.nd.expand.dims``
==========================================

Description
----------------------

Inserts a new axis of size 1 into the array shape
For example, given ``x`` with shape ``(2,3,4)``, then ``expand_dims(x, axis=1)``
will return a new array with shape ``(2,1,3,4)``.



Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Source input                                               |
+----------------------------------------+------------------------------------------------------------+
| ``axis``                               | int, required.                                             |
|                                        |                                                            |
|                                        | Position where new axis is to be inserted. Suppose that    |
|                                        | the input `NDArray`'s dimension is `ndim`, the range of    |
|                                        | the inserted axis is `[-ndim,                              |
|                                        | ndim]`                                                     |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/matrix_op.cc#L395

