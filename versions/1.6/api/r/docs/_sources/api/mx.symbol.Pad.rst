

``mx.symbol.Pad``
==================================

Description
----------------------

Pads an input array with a constant or edge values of the array.


.. note:: `Pad` is deprecated. Use `pad` instead.


.. note:: Current implementation only supports 4D and 5D input arrays with padding applied    only on axes 1, 2 and 3. Expects axes 4 and 5 in `pad_width` to be zero.

This operation pads an input array with either a `constant_value` or edge values
along each axis of the input array. The amount of padding is specified by `pad_width`.

`pad_width` is a tuple of integer padding widths for each axis of the format
``(before_1, after_1, ... , before_N, after_N)``. The `pad_width` should be of length ``2*N``
where ``N`` is the number of dimensions of the array.

For dimension ``N`` of the input array, ``before_N`` and ``after_N`` indicates how many values
to add before and after the elements of the array along dimension ``N``.
The widths of the higher two dimensions ``before_1``, ``after_1``, ``before_2``,
``after_2`` must be 0.


**Example**::

	 
	 x = [[[[  1.   2.   3.]
	 [  4.   5.   6.]]
	 
	 [[  7.   8.   9.]
	 [ 10.  11.  12.]]]
	 
	 
	 [[[ 11.  12.  13.]
	 [ 14.  15.  16.]]
	 
	 [[ 17.  18.  19.]
	 [ 20.  21.  22.]]]]
	 
	 pad(x,mode="edge", pad_width=(0,0,0,0,1,1,1,1)) =
	 
	 [[[[  1.   1.   2.   3.   3.]
	 [  1.   1.   2.   3.   3.]
	 [  4.   4.   5.   6.   6.]
	 [  4.   4.   5.   6.   6.]]
	 
	 [[  7.   7.   8.   9.   9.]
	 [  7.   7.   8.   9.   9.]
	 [ 10.  10.  11.  12.  12.]
	 [ 10.  10.  11.  12.  12.]]]
	 
	 
	 [[[ 11.  11.  12.  13.  13.]
	 [ 11.  11.  12.  13.  13.]
	 [ 14.  14.  15.  16.  16.]
	 [ 14.  14.  15.  16.  16.]]
	 
	 [[ 17.  17.  18.  19.  19.]
	 [ 17.  17.  18.  19.  19.]
	 [ 20.  20.  21.  22.  22.]
	 [ 20.  20.  21.  22.  22.]]]]
	 
	 pad(x, mode="constant", constant_value=0, pad_width=(0,0,0,0,1,1,1,1)) =
	 
	 [[[[  0.   0.   0.   0.   0.]
	 [  0.   1.   2.   3.   0.]
	 [  0.   4.   5.   6.   0.]
	 [  0.   0.   0.   0.   0.]]
	 
	 [[  0.   0.   0.   0.   0.]
	 [  0.   7.   8.   9.   0.]
	 [  0.  10.  11.  12.   0.]
	 [  0.   0.   0.   0.   0.]]]
	 
	 
	 [[[  0.   0.   0.   0.   0.]
	 [  0.  11.  12.  13.   0.]
	 [  0.  14.  15.  16.   0.]
	 [  0.   0.   0.   0.   0.]]
	 
	 [[  0.   0.   0.   0.   0.]
	 [  0.  17.  18.  19.   0.]
	 [  0.  20.  21.  22.   0.]
	 [  0.   0.   0.   0.   0.]]]]
	 
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.Pad(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | An n-dimensional input array.                              |
+----------------------------------------+------------------------------------------------------------+
| ``mode``                               | {'constant', 'edge', 'reflect'}, required.                 |
|                                        |                                                            |
|                                        | Padding type to use. "constant" pads with `constant_value` |
|                                        | "edge" pads using the edge values of the input array       |
|                                        | "reflect" pads by reflecting values with respect to the    |
|                                        | edges.                                                     |
+----------------------------------------+------------------------------------------------------------+
| ``pad.width``                          | Shape(tuple), required.                                    |
|                                        |                                                            |
|                                        | Widths of the padding regions applied to the edges of each |
|                                        | axis. It is a tuple of integer padding widths for each     |
|                                        | axis of the format ``(before_1, after_1, ... , before_N,   |
|                                        | after_N)``. It should be of length ``2*N`` where ``N`` is  |
|                                        | the number of dimensions of the array.This is equivalent   |
|                                        | to pad_width in numpy.pad, but                             |
|                                        | flattened.                                                 |
+----------------------------------------+------------------------------------------------------------+
| ``constant.value``                     | double, optional, default=0.                               |
|                                        |                                                            |
|                                        | The value used for padding when `mode` is "constant".      |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/pad.cc#L766

