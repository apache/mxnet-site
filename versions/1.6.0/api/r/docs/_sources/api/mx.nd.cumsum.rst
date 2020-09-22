

``mx.nd.cumsum``
================================

Description
----------------------

Return the cumulative sum of the elements along a given axis.



Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``a``                                  | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Input ndarray                                              |
+----------------------------------------+------------------------------------------------------------+
| ``axis``                               | int or None, optional, default='None'.                     |
|                                        |                                                            |
|                                        | Axis along which the cumulative sum is computed. The       |
|                                        | default (None) is to compute the cumsum over the flattened |
|                                        | array.                                                     |
+----------------------------------------+------------------------------------------------------------+
| ``dtype``                              | {None, 'float16', 'float32', 'float64', 'int32', 'int64',  |
|                                        | 'int8'},optional,                                          |
|                                        | default='None'.                                            |
|                                        |                                                            |
|                                        | Type of the returned array and of the accumulator in which |
|                                        | the elements are summed. If dtype is not specified, it     |
|                                        | defaults to the dtype of a, unless a has an integer dtype  |
|                                        | with a precision less than that of the default platform    |
|                                        | integer. In that case, the default platform integer is     |
|                                        | used.                                                      |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/numpy/np_cumsum.cc#L70

