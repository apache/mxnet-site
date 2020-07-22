

``mx.nd.tile``
============================

Description
----------------------

Repeats the whole array multiple times.
If ``reps`` has length *d*, and input array has dimension of *n*. There are
three cases:
- **n=d**. Repeat *i*-th dimension of the input by ``reps[i]`` times::
x = [[1, 2],
[3, 4]]
tile(x, reps=(2,3)) = [[ 1.,  2.,  1.,  2.,  1.,  2.],
[ 3.,  4.,  3.,  4.,  3.,  4.],
[ 1.,  2.,  1.,  2.,  1.,  2.],
[ 3.,  4.,  3.,  4.,  3.,  4.]]
- **n>d**. ``reps`` is promoted to length *n* by pre-pending 1's to it. Thus for
:
tile(x, reps=(2,)) = [[ 1.,  2.,  1.,  2.],
[ 3.,  4.,  3.,  4.]]
- **n<d**. The input is promoted to be d-dimensional by prepending new axes. So a
shape ``(2,2)`` array is promoted to ``(1,2,2)`` for 3-D replication::
tile(x, reps=(2,2,3)) = [[[ 1.,  2.,  1.,  2.,  1.,  2.],
[ 3.,  4.,  3.,  4.,  3.,  4.],
[ 1.,  2.,  1.,  2.,  1.,  2.],
[ 3.,  4.,  3.,  4.,  3.,  4.]],
[[ 1.,  2.,  1.,  2.,  1.,  2.],
[ 3.,  4.,  3.,  4.,  3.,  4.],
[ 1.,  2.,  1.,  2.,  1.,  2.],
[ 3.,  4.,  3.,  4.,  3.,  4.]]].  



Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Input data array                                           |
+----------------------------------------+------------------------------------------------------------+
| ``reps``                               | Shape(tuple), required.                                    |
|                                        |                                                            |
|                                        | The number of times for repeating the tensor a. Each dim   |
|                                        | size of reps must be a positive integer. If reps has       |
|                                        | length d, the result will have dimension of max(d,         |
|                                        | a.ndim); If a.ndim < d, a is promoted to be d-dimensional  |
|                                        | by prepending new axes. If a.ndim > d, reps is promoted to |
|                                        | a.ndim by pre-pending 1's to                               |
|                                        | it.                                                        |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/matrix_op.cc#L796

