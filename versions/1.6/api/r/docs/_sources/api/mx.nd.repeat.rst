

``mx.nd.repeat``
================================

Description
----------------------

Repeats elements of an array.
By default, ``repeat`` flattens the input array into 1-D and then repeats the
elements::
x = [[ 1, 2],
[ 3, 4]]
repeat(x, repeats=2) = [ 1.,  1.,  2.,  2.,  3.,  3.,  4.,  4.]
The parameter ``axis`` specifies the axis along which to perform :
repeat(x, repeats=2, axis=1) = [[ 1.,  1.,  2.,  2.],
[ 3.,  3.,  4.,  4.]]
repeat(x, repeats=2, axis=0) = [[ 1.,  2.],
[ 1.,  2.],
[ 3.,  4.],
[ 3.,  4.]]
repeat(x, repeats=2, axis=-1) = [[ 1.,  1.,  2.,  2.],
[ 3.,  3.,  4.,  4.]].  



Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Input data array                                           |
+----------------------------------------+------------------------------------------------------------+
| ``repeats``                            | int, required.                                             |
|                                        |                                                            |
|                                        | The number of repetitions for each element.                |
+----------------------------------------+------------------------------------------------------------+
| ``axis``                               | int or None, optional, default='None'.                     |
|                                        |                                                            |
|                                        | The axis along which to repeat values. The negative        |
|                                        | numbers are interpreted counting from the backward. By     |
|                                        | default, use the flattened input array, and return a flat  |
|                                        | output                                                     |
|                                        | array.                                                     |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/matrix_op.cc#L744

